const livro = {
    titulo: "O Pequeno Príncipe",
    autor : "Antoine de Saint-Exupéry",
    ano: "1943",
    resumo: function(){
        return `${this.titulo}, de ${this.autor}, publicado em ${this.ano}`;
    }
};
 console.log(livro.resumo())

const outroLivro = { ...livro, titulo: "Memórias Póstumas de Brás Cubas" };
console.log(outroLivro);
console.log(livro);
