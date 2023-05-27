// Media desktop medio
export const media_medio_desktop = `
@media (max-width: 1070px) {
  .box{
    flex-direction: column-reverse;
    height: auto;
  }
}
`

// Media tablet
export const media_tablet = `
@media (max-width: 798px) {
  padding:20px;
  .box{
    img{
      width:400px;
      height:400px;
    }
    .frame{
      display:flex;
      height: 400px;
      .text{
        overflow-x:hidden;
        font-size:15px;
        width: 450px;
        height: 350px;
      }
      .btns{
        width:270px;
        right: 85px;
      }
    }
  }
}
`

// Media mini tablet
export const media_mini_tablet = `
@media (max-width: 598px) {
  .box{
    img{
      width:380px;
      height:380px;
    }
    .frame{
      display:flex;
      height: 380px;
      .text{
        overflow-x:hidden;
        font-size:15px;
        width:350px;
        height: 350px;
      }
      .btns{
        width:270px;
        right: 40px;
      }
    }
  }
}
`

// Media para mobile
export const media_mobile = `
@media (max-width: 415px) {
  padding:0px;
  .box{
    img{
      width:330px;
      height:330px;
    }
    .frame{
      display:flex;
      height: 380px;
      .text{
        overflow-x:hidden;
        font-size:15px;
        width:310px;
        height: 350px;
        margin-top: 20px;
      }
      .btns{
        width:300px;
        right: 10px;
      }
    }
  }
}
`