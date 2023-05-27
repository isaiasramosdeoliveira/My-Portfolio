export const left = `
@keyframes left {
  from{
    opacity: 0;
    transform: translate(-25px, 0px);
  }
  to{
    opacity: 1;
  }
}
`
export const leftExit = `
@keyframes leftExit {
  from{
    opacity: 1;
  }
  to{
    transform: translate(-25px, 0px);
    opacity: 0;
  }
}
`
export const right = `
@keyframes right {
  from{
    opacity: 0;
    transform: translate(25px, 0px);
  }
  to{
    opacity: 1;
  }
}
`
export const rightExit = `
@keyframes rightExit {
  from{
    opacity: 1;
  }
  to{
    transform: translate(25px, 0px);
    opacity: 0;
  }
}
`
export const top = `
@keyframes top {
  from{
    opacity: 0;
    transform: translate(0px, -25px);
  }
  to{
    opacity: 1;
  }
}
`
export const topExit = `
@keyframes topExit {
  from{
    opacity: 1;
  }
  to{
    transform: translate(0px, -25px);
    opacity: 0;
  }
}
`
export const bottom = `
@keyframes bottom {
  from{
    opacity: 0;
    transform: translate(0px, 25px);
  }
  to{
    opacity: 1;
  }
}
`
export const bottomExit = `
@keyframes bottomExit {
  from{
    opacity: 1;
  }
  to{
    transform: translate(0px, 25px);
    opacity: 0;
  }
}
`

export const chatActive = `
  @keyframes chatActive {
    from {
      position: absolute;
      width: 30px;
      height: 30px;
      bottom: 0px;
      left: 0px;
    }
    to {
      width: 300px;
      height: 350px;
      clip-path: none;
    }
  }
`
export const chatDisabled = `
  @keyframes chatDisabled {
    to {
      position: absolute;
      width: 30px;
      height: 30px;
      bottom: 0px;
      left: 0px;
    }
    from {
      width: 300px;
      height: 350px;
      clip-path: none;
    }
  }
`