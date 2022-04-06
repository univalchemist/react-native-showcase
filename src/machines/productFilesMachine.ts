import { navigationRef } from '../App';
import { createMachine } from "xstate";

type ScreenName = 'Start' | 'TakePictureOrVideoScreen' | 'ConfirmPictureScreen' | 'Finish';

const navigate = (screenName: ScreenName) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(screenName);
  }
};
export type PhotosVariants = 'FrontFile' | 'SideFile' | 'SerialNumberFile';
type Format = 'PHOTO' | 'VIDEO' | null;
export interface ContextI {
  FrontFile: string;
  SideFile: string;
  SerialNumberFile: string;
  FrontFileFormat: Format;
  SideFileFormat: Format;
  SerialNumberFileFormat: Format;
  description: string;
  hints: string[];
  currentConfirmFile: PhotosVariants | null;
}

export const productFilesMachine = createMachine({
  id: 'productsFiles',
  initial: 'Start',
  schema: {
    context: {} as ContextI,
  },
  context: {
    FrontFile: '',
    SideFile: '',
    SerialNumberFile: '',
    FrontFileFormat: null,
    SideFileFormat: null,
    SerialNumberFileFormat: null,
    description: 'You will need to take 3 photos of the item',
    hints: [],
    currentConfirmFile: null,
  },
  states: {
    Start: {
      on: {
        NEXT: { 
          target: 'FrontFile', actions: ['navigateToFront', 'navigateToTakePictureOrVideoScreen'],
        },
      },
    },
    FrontFile: {
      on: {
        VERIFY: {
          target: 'ConfirmFrontFile', actions: ['navigateToConfirmScreen'],
        },
      },
    },
    ConfirmFrontFile: {
      on: {
        CONFIRM: { 
          target: 'SideFile', actions: ['navigateToSide', 'navigateToTakePictureOrVideoScreen'],
        },
        RETAKE: {
          target: 'FrontFile', actions: ['navigateToFront', 'navigateToTakePictureOrVideoScreen'],
        },
      },
    },
    SideFile: {
      on: { 
        VERIFY: {
          target: 'ConfirmSideFile', actions: ['navigateToConfirmScreen'],
        },
      },
    },
    ConfirmSideFile: {
      on: {
        CONFIRM: { 
          target: 'SerialNumberFile', actions: ['navigateToSerialNumber', 'navigateToTakePictureOrVideoScreen'],
        },
        RETAKE: {
          target: 'SideFile', actions: ['navigateToSide', 'navigateToTakePictureOrVideoScreen'],
        },
      },
    },
    SerialNumberFile: {
      on: { 
        VERIFY: {
          target: 'ConfirmSerialNumberFile', actions: ['navigateToConfirmScreen'],
        },
      },
    },
    ConfirmSerialNumberFile: {
      on: {
        CONFIRM: {
          target: 'Finish', actions: ['navigateToFinish'],
        },
        RETAKE: {
          target: 'SerialNumberFile', actions: ['navigateToSerialNumber', 'navigateToTakePictureOrVideoScreen'],
        },
      }
    },
    Finish: {
      on: {
        RESET: {
          target: 'Start', actions: ['resetMachine']
        }
      }
    },
  },
},
{
  actions: {
    navigateToConfirmScreen: (ctx, e) => {
      const pictureVariant = Object.keys(e.data)[0] as 'FrontFile' | 'SideFile' | 'SerialNumberFile';
      ctx[pictureVariant] = e.data[pictureVariant];
      ctx[`${pictureVariant}Format`] = e.data[`${pictureVariant}Format`];
      navigate('ConfirmPictureScreen');
    },
    navigateToTakePictureOrVideoScreen: () => {
      navigate('TakePictureOrVideoScreen');
    },
    navigateToFront: (context) => {
      context.description = 'Take picture of the front';
      context.hints = ['take picture of the whole item'];
      context.currentConfirmFile = 'FrontFile';
    },
    navigateToSide: (context) => {
      context.description = 'Take a picture from the side';
      context.hints = ['take picture of the whole item', 'try to capture the entire object'];
      context.currentConfirmFile = 'SideFile';
    },
    navigateToSerialNumber: (context) => {
      context.description = 'Take a picture of the serial number badge';
      context.hints = ['try to include only the badge in the photo', 'make sure that serial numbers are readable', 'try not to make the photo too dark'];
      context.currentConfirmFile = 'SerialNumberFile';
    },
    navigateToFinish: (context) => {
      context.description = 'Thanks for taking photos!';
      context.hints = [];
      navigate('Finish');
    },
    resetMachine: (context) => {
      context.FrontFile = '';
      context.SideFile = '';
      context.SerialNumberFile = '';
      context.description = 'You will need to take 3 photos of the item';
      context.hints = [];
      context.currentConfirmFile = null;
    }
  }
})