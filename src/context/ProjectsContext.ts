import { createContext, createElement, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Project } from "../types";
import { getProjects } from "../lib/contentful";
import { localProjects } from "../data/projects";

interface ProjectsContextType {
  projects: Project[];
  loading: boolean;
}

const ProjectsContext = createContext<ProjectsContextType>({
  projects: [],
  loading: true,
});

export function ProjectsProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getProjects();
        if (data.length > 0) {
          setProjects(data);
        } else {
          setProjects(localProjects);
        }
      } catch {
        setProjects(localProjects);
      }
      setLoading(false);
    }
    load();
  }, []);

  return createElement(
    ProjectsContext.Provider,
    { value: { projects, loading } },
    children,
  );
}

export function useProjects() {
  return useContext(ProjectsContext);
}