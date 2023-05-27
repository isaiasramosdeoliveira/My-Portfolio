// Media desktop medio
export const media_medio_desktop = `
@media (max-width: 1070px) {
  .header{
    h1{
      font-size: 45px;
    }
  }
  .describes{
    width: 85%;
    margin:auto;
    gap: 30px;
    .box{
      h4{
        text-align:center;
      }
      width: 300px;
    }
    div:nth-child(1){
      order:3;
    }
    div:nth-child(2){
      order:2;
    }
    #imgProject{
      width:450px;
      height:300px;
      order: 1;
    }
  }
}
`

// Media tablet
export const media_tablet = `
@media (max-width: 798px) {
  .header{
    flex-direction:column;
  }
  .describe{
    p{
      font-size: 14px;
    }
  }
  .describes{
    width: 85%;
    margin:auto;
    gap: 30px;
    .box{
      h4{
        text-align:start;
      }
      width: 400px;
    }
    #imgProject{
      width:450px;
      height:250px;
      order: 1;
    }
  }
}
`

// Media mini tablet
export const media_mini_tablet = `
@media (max-width: 598px) {
  .header{
    h1{
      font-size: 30px;
    }
  }
  .describe{
    padding: 20px;
    p{
      font-size: 12px;
    }
  }
  .describes{
    align-items:center;
    padding: 20px 20px 100px 20px;
    width: 85%;
    margin:auto;
    gap: 30px;
    .box{
      h4{
        text-align:start;
      }
      width: 300px;
    }
    #imgProject{
      width:350px;
      height:200px;
      order: 1;
    }
  }
}
`

// Media para mobile
export const media_mobile = `
@media (max-width: 415px) {
  .header{
    padding: 20px;
    img {
      width: 150px;
      height: 150px;
    }
    h1{
      font-size: 30px;
    }
  }
  .describes{
    #imgProject{
      width:300px;
      height:200px;
      order: 1;
    }
  }
}
`