import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

const handler = async (req, res) => {
  //
  //The preview secret must be accessible from
  //the client. Using Next.js server runtime 
  //config is used so you you can access the
  //value without having to hard-code it.
  const previewSecret = serverRuntimeConfig.uniform.previewSecret;
  //
  //
  if (!req.query.slug) {
    return res.status(400).json({ message: "Missing slug" });
  }
  const slug = Array.isArray(req.query.slug)
    ? req.query.slug[0]
    : req.query.slug;

  if (req.query.disable) {
    res.clearPreviewData();
    res.redirect(slug);
    return;
  }

  if (req.query.secret !== previewSecret) {
    return res.status(401).json({ message: "Invalid token" });
  }

  res.setPreviewData({});
  res.redirect(slug);
};

export default handler;
