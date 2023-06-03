import { center } from "global/utils/center"

// Media desktop medio
export const media_medio_desktop = `
@media (max-width: 1070px) {

}
`

// Media tablet
export const media_tablet = `
@media (max-width: 798px) {

}
`

// Media mini tablet
export const media_mini_tablet = `
@media (max-width: 598px) {
  .projects {
    padding-bottom: 150px;
    .project:nth-last-child(1) {
      margin: 10px auto;
    }
  }
}
`

// Media para mobile
export const media_mobile = `
@media (max-width: 415px) {
  padding: 0px;
  height: 90%;
  .presentation{
    .status{
      display: flex;
      flex-direction: column;
      .icon{
        font-size: 25px;
      }
    }
  }
  .projects{
    ${center}
  }
}
`