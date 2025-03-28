exports.uploadFile = ((req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send('Nenhum arquivo foi enviado.');
    }
    console.log(file);

    // Leitura do conteúdo do arquivo em memória
    const buffer = file.buffer;                // Buffer com os dados do arquivo
    const conteudoTexto = buffer.toString('utf-8');  // converte Buffer para texto

    console.log('Nome original:', file.originalname);
    console.log('Mimetype:', file.mimetype);
    console.log('Size:', file.size);


    return res.json({ name: file.originalname, type: file.mimetype, size: file.size });
});