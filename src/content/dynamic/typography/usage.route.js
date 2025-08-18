import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import TypographyUsage from './usage';
import { getThemeCode, DEFAULT_THEME_SLUG } from '~/config/themes';

export default function TypographyUsageRoute() {
  const { theme } = useParams();

  // Default to the default theme when hitting /typography/usage without theme
  if (!theme) {
    return <Navigate to={`/typography/usage/${DEFAULT_THEME_SLUG}`} replace />;
    }

  const code = getThemeCode(theme);

  // Unknown theme -> redirect to default
  if (!code) {
    return <Navigate to={`/typography/usage/${DEFAULT_THEME_SLUG}`} replace />;
  }

  return <TypographyUsage theme={code} themeSlug={theme} />;
}
