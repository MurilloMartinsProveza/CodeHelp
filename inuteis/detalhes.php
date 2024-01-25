<?php
// Aqui você pode incluir a lógica para recuperar os detalhes do projeto do banco de dados
// Supondo que você tenha uma função chamada getDetalhesProjeto() que retorna os detalhes com base no ID

// Exemplo de função fictícia
function getDetalhesProjeto($id) {
    // Aqui você deve realizar uma consulta no banco de dados para obter os detalhes do projeto
    // Substitua esta lógica pela obtenção real de dados do seu banco de dados
    $projeto = array(
        'titulo' => 'Título do Projeto',
        'descricao' => 'Descrição completa do Projeto.',
        'contato' => 'email@example.com',
    );

    return $projeto;
}

// Verifica se foi passado um ID válido pela URL
if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $projetoId = $_GET['id'];
    $detalhesProjeto = getDetalhesProjeto($projetoId);
} else {
    // Redireciona para a página inicial se não houver ID válido
    header('Location: index.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalhes do Projeto</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1>Detalhes do Projeto</h1>
    </header>

    <section>
        <div class="detalhes-projeto">
            <h2><?php echo $detalhesProjeto['titulo']; ?></h2>
            <p><?php echo $detalhesProjeto['descricao']; ?></p>
            <p>Informações de Contato: <?php echo $detalhesProjeto['contato']; ?></p>
            <!-- Adicione mais informações conforme necessário -->
        </div>
    </section>

    <footer>
        <p>&copy; 2024 Contrate um Programador. Todos os direitos reservados.</p>
    </footer>

</body>
</html>
