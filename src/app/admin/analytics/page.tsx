"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import FadeIn from "../../components/FadeIn";

interface Analytics {
  totalVisitors: number;
  pageViews: number;
  contactSubmissions: number;
  topPages: Array<{ page: string; views: number }>;
  monthlyData: Array<{ month: string; visitors: number; views: number }>;
}

export default function AnalyticsPage() {
  const router = useRouter();
  const [timeRange, setTimeRange] = useState("30days");

  // Mock analytics data
  const analytics: Analytics = {
    totalVisitors: 1250,
    pageViews: 3400,
    contactSubmissions: 45,
    topPages: [
      { page: "/", views: 1200 },
      { page: "/services", views: 800 },
      { page: "/portfolio", views: 600 },
      { page: "/blog", views: 400 },
      { page: "/contact", views: 300 },
    ],
    monthlyData: [
      { month: "Jan", visitors: 850, views: 2200 },
      { month: "Feb", visitors: 920, views: 2400 },
      { month: "Mar", visitors: 1100, views: 2800 },
      { month: "Apr", visitors: 1250, views: 3400 },
    ],
  };

  return (
    <main style={{ paddingTop: 120 }}>
      <Navbar />
      <FadeIn delay={0.2}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
            <h1 style={{ color: "#1A237E", marginBottom: "12px" }}>Analytics Dashboard</h1>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                style={{
                  padding: "8px 12px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "14px",
                }}
              >
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="90days">Last 90 days</option>
              </select>
              <button
                onClick={() => router.push("/admin")}
                style={{
                  padding: "8px 16px",
                  background: "#1A237E",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Back to Dashboard
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginBottom: "32px" }}>
            <div style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              border: "1px solid #e0e0e0",
            }}>
              <h3 style={{ color: "#1A237E", marginBottom: "12px" }}>Total Visitors</h3>
              <div style={{ fontSize: "2em", fontWeight: "bold", color: "#2E7D32" }}>
                {analytics.totalVisitors.toLocaleString()}
              </div>
              <p style={{ color: "#666", fontSize: "14px", marginTop: "8px" }}>+15% from last month</p>
            </div>
            <div style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              border: "1px solid #e0e0e0",
            }}>
              <h3 style={{ color: "#1A237E", marginBottom: "12px" }}>Page Views</h3>
              <div style={{ fontSize: "2em", fontWeight: "bold", color: "#1976D2" }}>
                {analytics.pageViews.toLocaleString()}
              </div>
              <p style={{ color: "#666", fontSize: "14px", marginTop: "8px" }}>+22% from last month</p>
            </div>
            <div style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              border: "1px solid #e0e0e0",
            }}>
              <h3 style={{ color: "#1A237E", marginBottom: "12px" }}>Contact Submissions</h3>
              <div style={{ fontSize: "2em", fontWeight: "bold", color: "#D32F2F" }}>
                {analytics.contactSubmissions}
              </div>
              <p style={{ color: "#666", fontSize: "14px", marginTop: "8px" }}>+8% from last month</p>
            </div>
            <div style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              border: "1px solid #e0e0e0",
            }}>
              <h3 style={{ color: "#1A237E", marginBottom: "12px" }}>Conversion Rate</h3>
              <div style={{ fontSize: "2em", fontWeight: "bold", color: "#7B1FA2" }}>3.6%</div>
              <p style={{ color: "#666", fontSize: "14px", marginTop: "8px" }}>+0.5% from last month</p>
            </div>
          </div>

          {/* Charts Section */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", gap: "24px", marginBottom: "32px" }}>
            {/* Top Pages */}
            <div style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              border: "1px solid #e0e0e0",
            }}>
              <h3 style={{ color: "#1A237E", marginBottom: "16px" }}>Top Pages</h3>
              {analytics.topPages.map((page, index) => (
                <div key={page.page} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: index < analytics.topPages.length - 1 ? "1px solid #f0f0f0" : "none",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background:
                        index === 0
                          ? "#FFD700"
                          : index === 1
                          ? "#C0C0C0"
                          : index === 2
                          ? "#CD7F32"
                          : "#E0E0E0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#333",
                    }}>
                      {index + 1}
                    </div>
                    <span style={{ fontWeight: "500" }}>{page.page}</span>
                  </div>
                  <span style={{ color: "#666", fontWeight: "600" }}>{page.views.toLocaleString()}</span>
                </div>
              ))}
            </div>
            {/* Monthly Trend */}
            <div style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              border: "1px solid #e0e0e0",
            }}>
              <h3 style={{ color: "#1A237E", marginBottom: "16px" }}>Monthly Trend</h3>
              <div style={{ height: "200px", display: "flex", alignItems: "flex-end", gap: "20px", padding: "20px 0" }}>
                {analytics.monthlyData.map((data, index) => (
                  <div key={data.month} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                    <div
                      style={{
                        width: "100%",
                        height: `${(data.visitors / Math.max(...analytics.monthlyData.map((d) => d.visitors))) * 120}px`,
                        background: "linear-gradient(135deg, #1A237E, #3949AB)",
                        borderRadius: "6px 6px 0 0",
                        marginBottom: "8px",
                      }}
                    ></div>
                    <span style={{ fontSize: "12px", color: "#666" }}>{data.month}</span>
                    <span style={{ fontSize: "10px", color: "#999" }}>{data.visitors}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Traffic Sources */}
          <div style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            border: "1px solid #e0e0e0",
            marginTop: "24px",
          }}>
            <h3 style={{ color: "#1A237E", marginBottom: "16px" }}>Traffic Sources</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
              <div style={{ textAlign: "center", padding: "16px" }}>
                <div style={{ fontSize: "2em", fontWeight: "bold", color: "#2E7D32" }}>45%</div>
                <div style={{ color: "#666", fontSize: "14px" }}>Direct Traffic</div>
              </div>
              <div style={{ textAlign: "center", padding: "16px" }}>
                <div style={{ fontSize: "2em", fontWeight: "bold", color: "#1976D2" }}>30%</div>
                <div style={{ color: "#666", fontSize: "14px" }}>Organic Search</div>
              </div>
              <div style={{ textAlign: "center", padding: "16px" }}>
                <div style={{ fontSize: "2em", fontWeight: "bold", color: "#D32F2F" }}>15%</div>
                <div style={{ color: "#666", fontSize: "14px" }}>Social Media</div>
              </div>
              <div style={{ textAlign: "center", padding: "16px" }}>
                <div style={{ fontSize: "2em", fontWeight: "bold", color: "#7B1FA2" }}>10%</div>
                <div style={{ color: "#666", fontSize: "14px" }}>Referral</div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}