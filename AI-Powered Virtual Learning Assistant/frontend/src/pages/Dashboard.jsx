import Layout from "../components/common/Layout";
import StudentDashboard from "../components/dashboard/StudentDashboard";

/*
  Dashboard Page
  ----------------
  Uses common Layout (Sidebar + Navbar + Chatbot)
*/

export default function Dashboard() {
  return (
    <Layout title="Dashboard">
      <StudentDashboard />
    </Layout>
  );
}
