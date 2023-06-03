import { center } from "global/utils/center"

// Media desktop medio
export const media_medio_desktop = `
@media (max-width: 1250px) {
  .btn {
    ${center}
    font-size: 16px;
    gap: 15px;
    width: 400px;
    margin: 0px 10px;
  }
  .courses {
    width: 300px;
    margin: auto;
    margin-top:10px;
    margin-bottom:10px;
    height: 100%;
    padding-bottom: 10px;
  }
  .dice_of_courses {
    ${center}
    flex-wrap:wrap;
    flex-direction: column;
  }
  overflow-x: hidden;
  .btn {
    width: 400px;
  }
  .courses {
    width: 400px;
    margin: 10px;
    height: 100%;
  }
  .dice_of_courses{
    justify-content: center;
    align-items: center;
    margin:auto;
    gap: 15px;
    padding: 10px;
    flex: 1 0 350px;
    height: auto;
    .btn {
      position: sticky;
    }
  }
}
`

// Media tablet
export const media_tablet = `
@media (max-width: 798px) {
  overflow-x: hidden;
  .btn {
    width: 400px;
  }
  .courses {
    width: 350px;
    margin: 10px;
    height: 100%;
  }
  .dice_of_courses{
    justify-content: center;
    align-items: center;
    margin:auto;
    gap: 15px;
    padding: 10px;
    flex: 1 0 350px;
    height: auto;
    .btn {
      position: sticky;
    }
  }
}
`

// Media mini tablet
export const media_mini_tablet = `
@media (max-width: 598px) {
  .btn {
    width: 325px;
  }
  .courses {
    width: 300px;
    margin: auto;
    margin-top:10px;
    margin-bottom:10px;
    height: 100%;
  }
  .dice_of_courses{
    overflow: hidden;
    justify-content: center;
    align-items: center;
    margin:auto;
    gap: 15px;
    padding: 10px;
    flex: 1 0 350px;
    height: auto;
    .btn {
      position: sticky;
    }
  }
}
`

// Media para mobile
export const media_mobile = `
@media (max-width: 415px) {
  height: 90%;
  padding:0px;
  .btn {
    ${center}
    width: 340px;
    margin:auto;
  }
  .courses {
    width: 335px;
    margin: auto;
    margin-top:10px;
    margin-bottom:10px;
    height: 100%;
  }
  .dice_of_courses{
    justify-content: center;
    align-items: center;
    margin:auto;
    gap: 15px;
    padding: 20px;
    flex: 1 0 350px;
    .btn {
      position: sticky;
    }
  }
}
`