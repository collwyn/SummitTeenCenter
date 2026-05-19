import { useState, useEffect, useCallback } from "react";
import { Lock, Users, Mail, MessageSquare, Lightbulb, LogOut, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const INTEREST_LABELS: Record<string, string> = {
  mentoring: "Mentoring",
  events: "Events",
  fundraising: "Fundraising",
  skilled_trade_teaching: "Skilled Trade Teaching",
  administrative: "Administrative",
  security_monitoring: "Security / Monitoring",
  other: "Other",
};

function fmt(ts: string) {
  return new Date(ts).toLocaleDateString("en-US", {
    year: "numeric", month: "short", day: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

type Tab = "newsletter" | "volunteers" | "contacts" | "suggestions";

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "newsletter", label: "Newsletter", icon: <Mail className="h-4 w-4" /> },
  { id: "volunteers", label: "Volunteers", icon: <Users className="h-4 w-4" /> },
  { id: "contacts", label: "Contact Messages", icon: <MessageSquare className="h-4 w-4" /> },
  { id: "suggestions", label: "Suggestions", icon: <Lightbulb className="h-4 w-4" /> },
];

export default function Admin() {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("admin_token"));
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("volunteers");
  const [data, setData] = useState<Record<Tab, any[] | null>>({
    newsletter: null, volunteers: null, contacts: null, suggestions: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTab = useCallback(async (tab: Tab, tok: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${BASE}/api/admin/${tab}`, {
        headers: { "x-admin-token": tok },
      });
      if (res.status === 401) { setToken(null); localStorage.removeItem("admin_token"); return; }
      const json = await res.json();
      setData((prev) => ({ ...prev, [tab]: json }));
    } catch {
      setError("Failed to load data. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (token) fetchTab(activeTab, token);
  }, [token, activeTab, fetchTab]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoggingIn(true);
    setLoginError("");
    try {
      const res = await fetch(`${BASE}/api/admin/auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        localStorage.setItem("admin_token", password);
        setToken(password);
      } else {
        setLoginError("Incorrect password.");
      }
    } catch {
      setLoginError("Could not reach the server.");
    } finally {
      setLoggingIn(false);
    }
  }

  function logout() {
    localStorage.removeItem("admin_token");
    setToken(null);
    setData({ newsletter: null, volunteers: null, contacts: null, suggestions: null });
  }

  if (!token) {
    return (
      <div className="min-h-screen bg-muted/20 flex items-center justify-center p-4">
        <Card className="w-full max-w-sm shadow-lg">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-3">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl font-display">Admin Access</CardTitle>
            <p className="text-sm text-muted-foreground">The Summit Center</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
              {loginError && <p className="text-sm text-destructive">{loginError}</p>}
              <Button type="submit" className="w-full" disabled={loggingIn || !password}>
                {loggingIn ? "Checking..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const rows = data[activeTab];
  const tabCount = (tab: Tab) => data[tab]?.length ?? "—";

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-xl">The Summit Center — Admin</h1>
          <p className="text-primary-foreground/70 text-sm">Form Submissions Dashboard</p>
        </div>
        <Button variant="ghost" size="sm" onClick={logout} className="text-primary-foreground hover:bg-primary-foreground/10">
          <LogOut className="h-4 w-4 mr-2" /> Sign Out
        </Button>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Tab Bar */}
        <div className="flex gap-2 flex-wrap mb-6">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === t.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-white text-muted-foreground hover:bg-muted border"
              }`}
            >
              {t.icon}
              {t.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeTab === t.id ? "bg-primary-foreground/20" : "bg-muted"}`}>
                {tabCount(t.id)}
              </span>
            </button>
          ))}
          <button
            onClick={() => token && fetchTab(activeTab, token)}
            className="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted border bg-white"
            title="Refresh"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>

        {error && <p className="text-destructive text-sm mb-4">{error}</p>}

        {loading && !rows && (
          <div className="text-center py-16 text-muted-foreground">Loading...</div>
        )}

        {/* Newsletter */}
        {activeTab === "newsletter" && rows && (
          <div className="grid gap-3">
            {rows.length === 0 && <EmptyState label="No newsletter sign-ups yet." />}
            {rows.map((r: any) => (
              <Card key={r.id} className="shadow-none border">
                <CardContent className="py-4 px-5 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <p className="font-semibold">{r.name}</p>
                    <a href={`mailto:${r.email}`} className="text-sm text-primary hover:underline">{r.email}</a>
                  </div>
                  <p className="text-xs text-muted-foreground">{fmt(r.createdAt)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Volunteers */}
        {activeTab === "volunteers" && rows && (
          <div className="grid gap-4">
            {rows.length === 0 && <EmptyState label="No volunteer submissions yet." />}
            {rows.map((r: any) => (
              <Card key={r.id} className="shadow-none border">
                <CardContent className="py-4 px-5 space-y-2">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <p className="font-semibold">{r.name}</p>
                      <a href={`mailto:${r.email}`} className="text-sm text-primary hover:underline">{r.email}</a>
                      {r.phone && <span className="text-sm text-muted-foreground ml-3">{r.phone}</span>}
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">{fmt(r.createdAt)}</p>
                      {r.neighborhood && <p className="text-xs text-muted-foreground">{r.neighborhood}</p>}
                    </div>
                  </div>
                  {r.interests?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {(r.interests as string[]).map((i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{INTEREST_LABELS[i] ?? i}</Badge>
                      ))}
                    </div>
                  )}
                  {r.message && <p className="text-sm text-muted-foreground border-l-2 border-muted pl-3 italic">{r.message}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Contact Messages */}
        {activeTab === "contacts" && rows && (
          <div className="grid gap-4">
            {rows.length === 0 && <EmptyState label="No contact messages yet." />}
            {rows.map((r: any) => (
              <Card key={r.id} className="shadow-none border">
                <CardContent className="py-4 px-5 space-y-2">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <p className="font-semibold">{r.name}</p>
                      <a href={`mailto:${r.email}`} className="text-sm text-primary hover:underline">{r.email}</a>
                    </div>
                    <p className="text-xs text-muted-foreground">{fmt(r.createdAt)}</p>
                  </div>
                  <p className="font-medium text-sm">{r.subject}</p>
                  <p className="text-sm text-muted-foreground">{r.message}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Suggestions */}
        {activeTab === "suggestions" && rows && (
          <div className="grid gap-4">
            {rows.length === 0 && <EmptyState label="No suggestions yet." />}
            {rows.map((r: any) => (
              <Card key={r.id} className="shadow-none border">
                <CardContent className="py-4 px-5 space-y-2">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <p className="font-semibold">{r.name ?? "Anonymous"}{r.neighborhood ? ` — ${r.neighborhood}` : ""}</p>
                    <p className="text-xs text-muted-foreground">{fmt(r.createdAt)}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{r.suggestion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="text-center py-16 text-muted-foreground text-sm">{label}</div>
  );
}
