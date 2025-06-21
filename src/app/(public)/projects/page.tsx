import Projects from "@/components/pages/projects/page";

export default function ProjectsPage() {
  return (
    <div className="pt-10">
      <Projects maxProjects={1000} showLoadMore={false} />
    </div>
  );
}
