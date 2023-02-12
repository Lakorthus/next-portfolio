// ./pages/api/exit-preview.ts

export default function exit(req: any, res: any) {
  res.clearPreviewData();
  res.writeHead(307, { Location: '/' });
  res.end();
}
