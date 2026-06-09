/** Retire les restes de widget.js (bouton flottant, scripts, iframes latérales). */
export function purgeLegacySquire(): void {
  document.getElementById("squire-widget")?.remove();
  document.getElementById("squire_booking_widget_root")?.remove();

  document.querySelectorAll<HTMLScriptElement>('script[src*="widget.getsquire.com"]').forEach((el) => el.remove());
  document.querySelectorAll<HTMLScriptElement>('script[src*="getsquire.com/v2/"]').forEach((el) => el.remove());
  document.querySelectorAll("iframe.squire_widget").forEach((el) => el.remove());

  const globals = [
    "SquireWidget",
    "_squireQueryClient",
    "_squireWidgetConfig",
    "_preloadSquireWidgetSetup",
    "_squireMountWidgetSetup",
  ] as const;

  for (const key of globals) {
    delete (window as Record<string, unknown>)[key];
  }
}
