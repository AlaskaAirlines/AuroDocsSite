import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import TypographyUsage from './usage';

// Map route theme slug to aag theme code used by design tokens CSS bundle
const themeCodeMap = {
  'alaska': 'as',
  'alaska-classic': 'asc',
  'hawaiian': 'ha',
  'auro-1': 'a1',
  'auro-2': 'a2'
};

export default function TypographyUsageRoute() {
  const { theme } = useParams();

  // Default to Alaska when hitting /typography/usage without theme
  if (!theme) {
    return <Navigate to="/typography/usage/alaska" replace />;
    }

  const code = themeCodeMap[theme];

  // Unknown theme -> redirect to default
  if (!code) {
    return <Navigate to="/typography/usage/alaska" replace />;
  }

  return <TypographyUsage theme={code} themeSlug={theme} />;
}
