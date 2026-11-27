import * as tus from "tus-js-client";
import { supabase } from "../api/supabse.api";

export type UploadTokenResponse = {
  uploadId: string;
  method: string;
  bucket: string;
  path: string;
  token: string;
  endpoint?: string;
  signatureHeader?: string;
  chunkSize?: number;
};

//upload Tus
export const uploadTusVideo = (
  file: File,
  info: UploadTokenResponse,
  onProgress?: (percentage: number) => void,
): Promise<void> => {
  if (!info.endpoint) return Promise.reject(new Error("缺少影片上傳 endpoint"));
  return new Promise<void>((resolve, reject) => {
    const upload = new tus.Upload(file, {
      endpoint: info.endpoint,
      chunkSize: info.chunkSize,
      headers: {
        [info.signatureHeader ?? "x-signature"]: info.token,
      },
      metadata: {
        bucketName: info.bucket,
        objectName: info.path,
        contentType: file.type,
        cacheControl: "3600",
      },
      onProgress: (bytesSent, bytesTotal) => {
        onProgress?.(
          bytesTotal > 0
            ? Math.min(100, Math.round((bytesSent / bytesTotal) * 100))
            : 0,
        );
      },
      onError: (error) => {
        const response =
          error instanceof tus.DetailedError
            ? error.originalResponse
            : undefined;
        console.error("[tus-upload:request-failed]", {
          uploadId: info.uploadId,
          endpointHost: new URL(info.endpoint!).host,
          errorMessage: error.message,
          status: response?.getStatus() ?? null,
          responseBody: response?.getBody() ?? null,
        });
        reject(error);
      },
      onSuccess: () => {
        onProgress?.(100);
        resolve();
      },
    });

    upload.start();
  });
};

//upload standard
export const uploadStandardVideo = async (
  file: File,
  info: UploadTokenResponse,
) => {
  const { data, error } = await supabase.storage
    .from(info.bucket)
    .uploadToSignedUrl(info.path, info.token, file, {
      contentType: file.type,
      cacheControl: "3600",
    });

  if (error) throw error;
  return data;
};
