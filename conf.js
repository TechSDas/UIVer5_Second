exports.config = {
    profile: 'integration',
	baseUrl: 'https://steds-prod-iscoper-web-approuter.cfapps.sap.hana.ondemand.com/cp.portal/site#Shell-home',
    // baseUrl: 'https://steds-prod-iscoper-web-approuter.cfapps.sap.hana.ondemand.com/cp.portal/site#testcase-maintain?sap-ui-app-id-hint=iscoper.maintaintestcase'
	auth: {
		'sapcloud-form': {
			user: '${param.user}',
			pass: '${param.pass}',
			userFieldSelector: '#USERNAME_FIELD-inner',
			passFieldSelector: '#PASSWORD_FIELD-inner',
			logonButtonSelector: '#LOGIN_LINK'
		}
	},
    specs: ['spec.js']
  };
