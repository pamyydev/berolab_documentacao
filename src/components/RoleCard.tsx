
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface RoleCardProps {
  title: string;
  badge: string;
  badgeVariant: "owner" | "admin" | "manager" | "senior" | "moderator" | "support" | "staff" | "partner" | "booster" | "student";
  description: string;
  responsibilities: string[];
  permissions?: string[];
  examples?: string;
}

export const RoleCard = ({ 
  title, 
  badge, 
  badgeVariant, 
  description, 
  responsibilities, 
  permissions, 
  examples 
}: RoleCardProps) => {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors">
      <CardHeader>
        <div className="flex items-center gap-3">
          <CardTitle className="text-foreground font-normal text-xl">{title}</CardTitle>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
        <CardDescription className="text-muted-foreground font-light">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">Responsabilidades</h4>
          <ul className="space-y-1">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-accent font-mono">•</span>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
        
        {permissions && permissions.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Permissões</h4>
            <ul className="space-y-1">
              {permissions.map((permission, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-dracula-green font-mono">→</span>
                  {permission}
                </li>
              ))}
            </ul>
          </div>
        )}

        {examples && (
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Exemplo de atuação</h4>
            <p className="text-sm text-muted-foreground italic border-l-2 border-accent pl-3">
              {examples}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
