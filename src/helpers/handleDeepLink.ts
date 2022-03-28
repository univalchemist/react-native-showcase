import { parse } from 'search-params';
import { navigationRef } from '../App';

interface ConfirmEmailParams {
	link: string;
	userId: string;
}

interface TakePicturesParams {
	link: string;
	scenario: number;
	requestId: string;
}

export const handleDeepLink = (link: any) => { // todo: Add export type Link to react-native-modules/packages/dynamic-links/src/useDynamicLinks.ts @ line 6
	if (link?.url) {	
		const url: string = link.url
		const newurl = url.replace(/,/g, "&").replace(/%3D/g, "=");
		const params = newurl.split('?')[1];

		const parsedParams: ConfirmEmailParams | TakePicturesParams = parse(params);

		switch (parsedParams.link) {
			case 'confirmEmail':
				const confirmEmailParams: ConfirmEmailParams = parsedParams as ConfirmEmailParams;
				navigationRef.navigate('ConfirmEmail', { ...confirmEmailParams });				
				break;
			case 'uploadPictures':
				const takePictureParams: TakePicturesParams = parsedParams as TakePicturesParams;
				navigationRef.navigate('UploadPictures', { ...takePictureParams });				
				break;
			default:
				break;
		}
	}
}