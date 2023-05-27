// Media desktop medio
export const media_desktop = `
@media (max-width: 1200px) {
  .box{
    width:76%;
  }
}
`

// Media desktop medio
export const media_medio_desktop = `
@media (max-width: 1070px) {
  padding:10px;
  .box{
    width: 80%;
    justify-content: center;
    gap:20px;
  }
  .profile {
    display: flex;
    margin:auto;
  }
}
`

// Media tablet
export const media_tablet = `
@media (max-width: 798px) {
  .box{
    min-width: 100%;
    gap:20px;
  }
}
`

// Media mini tablet
export const media_mini_tablet = `
@media (max-width: 598px) {
  align-items:flex-start;
  .profile{
    img{
      margin-top:10px;
      margin-bottom:20px;
      width: 325px;
    }
  }
  .btns{
    max-width:350px;
    margin-top:-20px;
    .carrer{

      button:nth-last-child(1) {
        margin-bottom: 100px;
      }
      button:nth-child(1n + 2){
        width: 300px;
      }
    }
  }
  .socialMedia{
    max-width:350px;
    margin-top:0px;
    a {
      .btn {
        max-width: 170px;
        padding: 15px;
        justify-content:start;
        gap: 10px;
        p {
          display: block;
        }
        .icon {
          margin: -10px 0px;
          font-size: 25px;
        }
      }
      }
  }
}
`

// Media para mobile
export const media_mobile = `
@media (max-width: 415px) {
  height: 95%;
  overflow:hidden;
  .profile{
    img{
      width: 320px;
      margin-top:0px;
    }
  }
  .btns{
    max-width:325px;
      margin-top:10px;
    .carrer{
      button:nth-last-child(1) {
        margin-bottom: 100px;
      }
      button:nth-child(1n + 2){
        width: 300px;
      }
    }
  }
  .socialMedia{
    max-width:325px;
    a {
      .btn {
        max-width: 157px;
        padding: 15px;
        justify-content:start;
        gap: 10px;
        p {
          display: block;
        }
        .icon {
          margin: -10px 0px;
          font-size: 25px;
        }
      }
      }
  }
  footer {
    font-family: "Dancing Script", cursive;
    font-size: 30px;
    position: absolute;
    top: 335px;
    height: 40px;
  }
}
`