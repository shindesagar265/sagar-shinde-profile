import { ExternalLink, Github, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { Project } from '../types';
import { ArchitectureStrip } from './ArchitectureStrip';

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (project && dialog && !dialog.open) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      dialog.showModal();
      closeButtonRef.current?.focus();
    }
    if (!project && dialog?.open) dialog.close();
  }, [project]);

  if (!project) return null;

  return (
    <dialog ref={dialogRef} className="project-dialog" onCancel={(event) => { event.preventDefault(); onClose(); }} onClose={() => { onClose(); previousFocusRef.current?.focus(); }} aria-labelledby="project-dialog-title">
      <div className="dialog-header">
        <div><span className="eyebrow">{project.eyebrow}</span><h3 id="project-dialog-title">{project.title}</h3></div>
        <button ref={closeButtonRef} className="icon-button" type="button" onClick={onClose} aria-label="Close project details"><X aria-hidden="true" size={20} /></button>
      </div>
      <p className="dialog-summary">{project.summary}</p>
      <ArchitectureStrip steps={project.architecture} />
      <div className="dialog-grid">
        <section><h4>The challenge</h4><p>{project.challenge}</p></section>
        <section><h4>The approach</h4><p>{project.approach}</p></section>
      </div>
      <div className="tag-list" aria-label="Technologies">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
      <footer className="dialog-actions">
        <a className="button button-secondary" href={project.repositoryUrl} target="_blank" rel="noreferrer"><Github aria-hidden="true" size={17} />Explore on GitHub<ExternalLink aria-hidden="true" size={14} /></a>
        <button className="button" type="button" onClick={onClose}>Return to projects</button>
      </footer>
    </dialog>
  );
}
