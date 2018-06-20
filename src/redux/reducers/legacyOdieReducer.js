// This is our initial state
const initialState = {
  subdomain: '',
  subdomainValid: true,
  docUrl: '',
  docUrlValid: true,
  isLoading: false,
  isValid: true,
  docUrlAndSubdomainMatch: true,
  verificationHash: '',
};

// The loading reducer
export const legacyOdieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LEGACY_DOC_URL':
      return Object.assign({}, state, {
        docUrl: action.docUrl,
      });
    case 'SET_LEGACY_SUBDOMAIN':
      return Object.assign({}, state, {
        subdomain: action.subdomain
      });
    case 'LEGACY_VERIFY_SUBDOMAIN':
      return Object.assign({}, state, {
        subdomainValid: action.verified,
      });
    case 'LEGACY_VERIFY_DOC_URL':
      return Object.assign({}, state, {
        docUrlValid: action.verified,
      });
    case 'LEGACY_VERIFY_SUBDOMAIN_AND_DOC_URL':
      return Object.assign({}, state, {
        docUrlAndSubdomainMatch: action.verified,
      });
    case 'SET_LEGACY_VERIFICATION_HASH':
      return Object.assign({}, state, {
        verificationHash: action.hash,
      });
    case 'RESET_LEGACY_FORM':
      return initialState;
    default:
      return state
  }
}
