import { Header } from "@/components/Header";
import { RoleCard } from "@/components/RoleCard";
import { roles } from "@/data/roles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <p className="text-muted-foreground font-light max-w-3xl">
            Sistema hierárquico estruturado para organização e gestão eficiente da comunidade Berolab. 
            Cada cargo possui responsabilidades específicas e níveis de acesso diferenciados.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {roles.map((role, index) => (
            <RoleCard key={index} {...role} />
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-xs text-muted-foreground font-mono">
              docs.berolab.dev • Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
