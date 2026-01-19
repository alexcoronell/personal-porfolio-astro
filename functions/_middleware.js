export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Redirect from pages.dev to alexcoronell.dev
  if (url.hostname.endsWith('.pages.dev')) {
    const redirectUrl = `https://alexcoronell.dev${url.pathname}${url.search}`;
    return Response.redirect(redirectUrl, 301);
  }

  // Continue normal for the main domain
  return context.next();
}
