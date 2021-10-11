// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const table = require('../../src/generated.json');

export default function tableAPI(req, res) {
    res.status(200).json(table);
  }
  