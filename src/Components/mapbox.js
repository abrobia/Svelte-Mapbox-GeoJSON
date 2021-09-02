import mapbox from 'mapbox-gl';
import { mapBoxAccessToken } from "../constants";
// https://docs.mapbox.com/help/glossary/access-token/
mapbox.accessToken = mapBoxAccessToken;;

const keyApp = {};

export { mapbox, keyApp };