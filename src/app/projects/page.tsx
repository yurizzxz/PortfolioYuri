import Projects from "@/components/sections/project-section";

export default function ProjectsPage() {
  return (
    <div className="pt-10">
      <Projects maxProjects={1000} showLoadMore={false} />
    </div>
  );
}
