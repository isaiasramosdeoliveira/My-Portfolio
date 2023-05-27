
// Media desktop medio
export const media_medio_desktop = `
@media (max-width: 1070px) {

}
`

// Media tablet
export const media_tablet = `
@media (max-width: 798px) {
  #Content{
    padding: 0px;
  }
  #Menu{
    &:hover{
      width:280px;
    }
  }
}
`

// Media mini tablet
export const media_mini_tablet = `
@media (max-width: 598px) {
  #Content{
  }
  #Menu{
    &:hover{
      width: 300px;
    }
  }
}
`

// Media para mobile
export const media_mobile = `
@media (max-width: 415px) {
  flex-direction: row-reverse;
  #Content{
    height:100vh;
  }
  #Message{
    left: 20px;
    #ButtonMessage{
      position:absolute;
      left: -80px;
      bottom: -20px;
    }
  }
  #Menu{
    position:fixed;
    border-radius:0px 0px 0px 5px;
    top:0;
    height:60px;
    overflow:hidden;
    .logo{
      display:none;
    }
    .anchors{
      #expend{
        display:block;
      }
      width:60px;
      &:hover{
        li{
          .icon {
            animation: none;
          }
          a{
            justify-content: center;
            .describe {
              animation: none;
            }
          }
        }
      }
    }
    &:hover{
      width: 60px;
      li{
        .describe{
          display:none;
        }
      }
    }
  }
}
`