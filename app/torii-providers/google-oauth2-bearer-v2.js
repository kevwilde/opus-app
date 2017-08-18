import GoogleOAuth2Provider from 'torii/providers/google-oauth2-bearer-v2'

export default GoogleOAuth2Provider.extend({
  fetch(data) {
    return data;
  }
});
