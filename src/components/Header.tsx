export const Header = () => {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">B</span>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-foreground">Berolab</h1>
              <p className="text-sm text-muted-foreground font-light">Documentação Oficial de Cargos</p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-xs font-mono text-dracula-comment">v2.0.0</span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">Versão expandida</span>
        </div>
      </div>
    </header>
  );
};