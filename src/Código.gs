function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Financeiro")
    .addItem("Verificar Pendentes", "sheetService_verificarPendentes")
    .addToUi();
}
