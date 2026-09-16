//接受標籤
const ALLOWED_TAGS = new Set([
  "P",
  "BR",
  "DIV",
  "H2",
  "H3",
  "STRONG",
  "B",
  "EM",
  "I",
  "U",
  "UL",
  "OL",
  "LI",
  "FONT",
  "IMG",
]);

//拒絕標籤
const REMOVE_WITH_CONTENT = new Set([
  "SCRIPT",
  "STYLE",
  "IFRAME",
  "OBJECT",
  "EMBED",
  "SVG",
  "MATH",
  "TEMPLATE",
]);

//驗證色碼表
const isSafeColor = (value: string) => /^#[0-9a-f]{6}$/i.test(value);

export const isSafeImageUrl = (value: string) => {
  try {
    const url = new URL(value, "https://tangy.local");
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
};

const isSafeImageDataUrl = (value: string) =>
  /^data:image\/(png|jpeg|gif|webp);base64,[a-z0-9+/=\s]+$/i.test(value) &&
  value.length <= 7_000_000;

export const isSafeImageSource = (value: string) =>
  isSafeImageUrl(value) || isSafeImageDataUrl(value);

export function sanitizeCourseContent(html: string): string {
  //解析瀏覽器dom結構
  const documentNode = new DOMParser().parseFromString(html, "text/html");

  const sanitizeNode = (node: Node) => {
    if (node.nodeType !== Node.ELEMENT_NODE) return;

    //移除拒絕的標籤
    const element = node as HTMLElement;
    if (REMOVE_WITH_CONTENT.has(element.tagName)) {
      element.remove();
      return;
    }

    //遞迴檢查子元素
    [...element.childNodes].forEach(sanitizeNode);

    //移除不再白名單的標籤 但保留文字
    if (!ALLOWED_TAGS.has(element.tagName)) {
      const parent = element.parentNode;
      if (!parent) return;
      while (element.firstChild)
        parent.insertBefore(element.firstChild, element);
      element.remove();
      return;
    }

    //一般元素的attribute全部刪除(onclick ... 等)
    [...element.attributes].forEach((attribute) => {
      //FONT color 可以保留
      const canKeepColor =
        element.tagName === "FONT" &&
        attribute.name.toLowerCase() === "color" &&
        isSafeColor(attribute.value);
      const canKeepImageSource =
        element.tagName === "IMG" &&
        attribute.name.toLowerCase() === "src" &&
        isSafeImageSource(attribute.value);
      const canKeepImageAlt =
        element.tagName === "IMG" && attribute.name.toLowerCase() === "alt";
      const canKeepImageWidth =
        element.tagName === "IMG" &&
        attribute.name.toLowerCase() === "width" &&
        /^\d{1,4}$/.test(attribute.value) &&
        Number(attribute.value) <= 2000;
      if (
        !canKeepColor &&
        !canKeepImageSource &&
        !canKeepImageAlt &&
        !canKeepImageWidth
      ) {
        element.removeAttribute(attribute.name);
      }
    });

    if (element.tagName === "IMG" && !element.getAttribute("src")) {
      element.remove();
    }
  };

  [...documentNode.body.childNodes].forEach(sanitizeNode);
  return documentNode.body.innerHTML;
}
