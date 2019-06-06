module.exports = function (api) {
  api.loadSource(store => {
    store.addMetaData('metaDivider', '∙')
  })
}
