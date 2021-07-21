$( document ).ready(function() {
    var images = [
	"img/porto.jpg",
  "img/porto2.jpg"
]
var current = 0;
setInterval(function(){
    console.log("te");
  $('#header-img').css('background-image', 'url('+images[current]+')');
  current = (current < images.length - 1)? current + 1: 0;
},5000);
});

$("#cnpj_empresa").mask("99.999.999/9999-99");

$("#tel_telefone").mask("(99) 9999-9999");

$("#cel_celular").mask("(99) 99999-9999");

$("#cep_empresa").mask("99999-999");

var erro = false;
function verificarVazios() {
    if ($('#ds_nome').val() == '' || $('#ds_nome').val() == ' ') {
        erro = true;
        swal("Erro !", "Preencha o campo de razão social corretamente",
                "error");
    } else if ($('#cnpj_empresa').val() == ''
            || $('#cnpj_empresa').val() == ' ') {
        erro = true;
        swal("Erro !", "Preencha o campo de cnpj corretamente", "error");
    } else if ($('#inscricao_estadual').val() == ''
            || $('#inscricao_estadual').val() == ' ') {
        erro = true;
        swal("Erro !",
                "Preencha o campo de inscricao estadual corretamente",
                "error");
    } else if ($('#nome').val() == ''
            || $('#nome').val() == ' ') {
        erro = true;
        swal("Erro !",
                "Preencha o campo de nome completo corretamente",
                "error");
    } else if ($('#cargo').val() == ''
            || $('#cargo').val() == ' ') {
        erro = true;
        swal("Erro !",
                "Preencha o campo de cargo corretamente",
                "error");
    } else if ($('#tel_telefone').val() == ''
            || $('#tel_telefone').val() == ' ') {
        erro = true;
        swal("Erro !", "Preencha o campo de telefone corretamente",
                "error");
    } else if ($('#cel_celular').val() == ''
            || $('#cel_celular').val() == ' ') {
        erro = true;
        swal("Erro !", "Preencha o campo de celular corretamente",
                "error");
    } else if ($('#email_empresa').val() == ''
            || $('#email_empresa').val() == ' ') {
        erro = true;
        swal("Erro !", "Preencha o campo de email corretamente",
                "error");
    } else if ($('#endereco').val() == ''
            || $('#endereco').val() == ' ') {
        erro = true;
        swal("Erro !", "Preencha o campo de endereco corretamente",
                "error");
    } else if ($('#complemento').val() == ''
            || $('#complemento').val() == ' ') {
        erro = true;
        swal("Erro !", "Preencha o campo de complemento corretamente",
                "error");
    } else if ($('#bairro').val() == '' || $('#bairro').val() == ' ') {
        erro = true;
        swal("Erro !", "Preencha o campo de bairro corretamente",
                "error");
    } else if ($('#cep_empresa').val() == ''
            || $('#cep_empresa').val() == ' ') {
        erro = true;
        swal("Erro !", "Preencha o campo de cep corretamente", "error");
    } else if ($('#estado').val() == '' || $('#estado').val() == ' ') {
        erro = true;
        swal("Erro !", "Preencha o campo de estado corretamente",
                "error");
    } else if ($('#cidade').val() == '' || $('#cidade').val() == ' ') {
        erro = true;
        swal("Erro !", "Preencha o campo de cidade corretamente",
                "error");
    } else if ($('#senha').val() == '' || $('#senha').val() == ' ') {
        erro = true;
        swal("Erro !", "Preencha o campo de senha corretamente",
                "error");
    } else if ($('#senha2').val() == '' || $('#senha2').val() == ' ') {
        erro = true;
        swal("Erro !", "Preencha o campo de confirmar senha corretamente",
                "error");
    } else if ($('#senha').val() != $('#senha2').val() ) {
        erro = true;
        swal("Erro !", "Senhas diferentes",
                "error");
    } else {
        erro = false;
    }

}

function enviar() {

    verificarVazios();
    if (erro == false) {
        
        empresaIncluir2();
    }

}

function empresaIncluir2() {
    $("#btnIncluir").attr("onclick", "empresaIncluir2()");
    var texto = 'r';
    var envio = {
        opcao : 0,
        id_empresa : $("#id_empresa").val(),
        ds_nome : $("#ds_nome").val(),
        nome : $("#nome").val(),
        cargo : $("#cargo").val(),
        cnpj_empresa : $("#cnpj_empresa").val(),
        inscricao_estadual : $("#inscricao_estadual").val(),
        tel_telefone : $("#tel_telefone").val(),
        cel_celular : $("#cel_celular").val(),
        email_empresa : $("#email_empresa").val(),
        endereco : $("#endereco").val(),
        complemento : $("#complemento").val(),
        bairro : $("#bairro").val(),
        cep_empresa : $("#cep_empresa").val(),
        estado : $("#estado").val(),
        cidade : $("#cidade").val(),
        dt_cadastro : $("#dt_cadastro").val(),
        dt_ultimoacesso : $("#dt_ultimoacesso").val(),
        senha : $("#senha").val(),
        ativo : "nao"
        
    };

    $.ajax({
        url : '/bidd/servletcadastrofornecedor',
        type : 'post',
        success : function(data) {
            //$('#target').html(data);  
            texto = "" + data;

            
            if (texto == 's') {

                swal("Sucesso !", "Cadastro efetuado com sucesso, não esqueça de verificar em seu e-mail a caixa de spam.",
                        "success");

            } else {
                swal("Erro !", "Erro ao efetuar o cadastro, envie e-mail para contato@bidd.com.br relatando seu problema!", "error");
                $("#msg-modal").text("Erro ao efetuar o cadastro");
                //$('#msgModal').modal();
                $("#msg-modal").prop('class', 'text-red');
            }
        },
        data : envio
    });

}