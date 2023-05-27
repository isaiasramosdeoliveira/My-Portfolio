// Media desktop medio
export const media_medio_desktop = `
@media (max-width: 1070px) {
  .dice{
    .skills{
      justify-content:start;
      padding:20px;
      flex-wrap: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      flex-wrap:nowrap;
      max-height: 250px;
    }
    .range{
      .text{
        text-align:center;
        white-space:nowrap;
        width: 125px;
      }
      .line{
        width: 40%;
      }
    }
  }

}
`

// Media tablet
export const media_tablet = `
@media (max-width: 798px) {
  .dice{
    .range{
      .text{
        text-align:center;
        white-space:nowrap;
        width: 125px;
      }
      .line{
        width: 35%;
      }
    }
  }
}
`

// Media mini tablet
export const media_mini_tablet = `
@media (max-width: 598px) {
  .dice{
    .skills{
      .group:nth-child(1){
        margin:auto;
      }
    }
    .range{
      .text{
        text-align:center;
        white-space:nowrap;
        width: 125px;
      }
      .line{
        width: 30%;
      }
    }
  }
}
`

// Media para mobile
export const media_mobile = `
@media (max-width: 415px) {
  padding:0px;
  .dice{
    margin: 0px -10px;
    width:105%;
    .skills{
      justify-content:start;
      padding:20px;
      flex-wrap: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      flex-wrap:nowrap;
      max-height: 250px;
    }
    .range{
      .text{
        text-align:center;
        white-space:nowrap;
        width: 125px;
      }
      .line{
        width: 30%;
      }
    }
  }
}
`