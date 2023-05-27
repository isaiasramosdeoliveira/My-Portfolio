import { backgroundDark, backgroundLight, corPrimaryBlack_1, corPrimaryBlack_3, corPrimaryBlack_4, corPrimaryBlack_5, corPrimaryGrey_1, corPrimaryRed_3, corPrimaryRed_7, corPrimaryWhite_5, letter } from "../../variables/variables"
import { ModeDarkMenu } from "./Dark/Menu/ModeDarkMenu"
import { ModeDarkPageCertification } from "./Dark/Certification/ModeDarkPageCertification"
import { ModeDarkPageProjects } from "./Dark/projects/ModeDarkPageProjects"
import { ModeLightMenu } from "./Light/Menu/ModeLightMenu"
import { ModeLightPageCertification } from "./Light/Certification/ModeLightPageCertification"
import { ModeLightPageProjects } from "./Light/projects/ModeLightPageProjects"
import { ModeDarkPageMain } from "./Dark/Main/ModeDarkPageMain"
import { ModeLightPageMain } from "./Light/Main/ModeLightPageMain"
import { ModeDarkButtons } from "./Dark/Buttons/ModeDarkButtons"
import { ModeLightButtons } from "./Light/Buttons/ModeLightButtons"
import { ModeDarkPageSkills } from "./Dark/Skills/ModeDarkPageSkills"
import { ModeLightPageSkills } from "./Light/Skills/ModeLightPageSkills"
import { ModeDarkPageAboutMe } from "./Dark/AboutMe/ModeDarkPageAboutMe"
import { ModeLightPageAboutMe } from "./Light/AboutMe/ModeLightPageAboutMe"
import { ModeDarkPageContacts } from "./Dark/Contacts/ModeDarkPageContacts"
import { ModeLightPageContacts } from "./Light/Contacts/ModeLightPageContacts"
import { ModeDarkMessage } from "./Dark/Message/ModeDarkMessage"
import { ModeLightMessage } from "./Light/Message/ModeLightMessage"

export const ThemeDark = {
  menu: ModeDarkMenu ,
  content: {
    bg: `${corPrimaryBlack_1}`,
    letter: `${letter}`,
    img: `${backgroundDark}`,
    pageMain: ModeDarkPageMain,
    pageCertification: ModeDarkPageCertification,
    pageProjects: ModeDarkPageProjects,
    pageProject: '',
    pageSkills: ModeDarkPageSkills,
    pageAboutMe: ModeDarkPageAboutMe,
    pageContacts: ModeDarkPageContacts,
    message: ModeDarkMessage
  },
  buttons: ModeDarkButtons,
  items: {
    bg:`${corPrimaryBlack_3}`,
    top: `${corPrimaryBlack_5}`,
    bottom: `${corPrimaryBlack_4}`,
  },
  scroll: {
    bgExtern: `transparent`,
    bgIntern: `${corPrimaryBlack_5}`,
  }
}

export const ThemeLight = {
  menu: ModeLightMenu,
  content: {
    bg: `${corPrimaryWhite_5}`,
    img: `${backgroundLight}`,
    pageMain: ModeLightPageMain,
    pageCertification: ModeLightPageCertification,
    pageProjects: ModeLightPageProjects,
    pageProject: '',
    pageSkills: ModeLightPageSkills,
    pageAboutMe: ModeLightPageAboutMe,
    pageContacts: ModeLightPageContacts,
    message: ModeLightMessage
  },
  buttons: ModeLightButtons,
  items: {
    bg: `${corPrimaryRed_7}`,
    top: `${corPrimaryRed_3}`,
    bottom: `${corPrimaryRed_7}`,
  },
  scroll: {
    bgExtern: `transparent`,
    bgIntern: `${corPrimaryGrey_1}`
  }
}