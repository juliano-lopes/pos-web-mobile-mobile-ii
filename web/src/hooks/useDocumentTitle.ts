import { useEffect } from 'react';

/**
 * Hook para definir o título do documento (document.title).
 * @param title O título que deve ser exibido na aba do navegador.
 * @param subtrailing (Opcional) Texto fixo que será anexado ao título (ex: " - Coach4Me").
 */
export const useDocumentTitle = (title: string, subtrailing: string = ' | Coach4Me') => {
    useEffect(() => {
        document.title = `${title}${subtrailing}`;
    }, [title, subtrailing]);
};