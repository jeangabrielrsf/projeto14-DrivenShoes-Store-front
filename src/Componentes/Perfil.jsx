import Css from "./style.js";

export default function Perfil() {
  return (
    <>
      <Css.Topo>
        <ion-icon name="caret-back-outline"></ion-icon>
      </Css.Topo>
      <Css.TelaRestante>
        <Css.BoxCentral>
          <Css.Perfil />
          <Css.NomePerfil>Nome do Fulano</Css.NomePerfil>
          <Css.InputAvatar placeholder="URL DA IMAGEM" />
          <Css.Salvar>Salvar</Css.Salvar>
        </Css.BoxCentral>
      </Css.TelaRestante>
    </>
  );
}
