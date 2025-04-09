import { useState, useEffect } from 'react';
import { version as unprefixedInstalledVersion } from '@aurodesignsystem/design-tokens/package.json';

/**
 * Alerts consumers whether the version presented on the Doc site is current or not
 * 
 * In package.json, do not use a caret (^) for the version of design-tokens.
 * This ensures strict validity checks and guarantees that the specified version is always used.
 */
function VersionChecker() {
  // Ensure installed version has 'v' prefix for consistency
  const installedVersion = unprefixedInstalledVersion.startsWith('v') ? unprefixedInstalledVersion : `v${unprefixedInstalledVersion}`;
  const githubRepoUrl = 'https://github.com/AlaskaAirlines/AuroDesignTokens';
  const githubLatestReleaseUrl = 'https://api.github.com/repos/AlaskaAirlines/AuroDesignTokens/releases/latest';
  const [githubVersion, setGithubVersion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Manage cleanup of fetch request
    const abortController = new AbortController();
    const signal = abortController.signal;
    
    const fetchLatestVersion = async () => {
      try {
        setLoading(true);
        const response = await fetch(githubLatestReleaseUrl, { signal });
        
        if (!response.ok) {
          throw new Error(`HTTP error. Status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Ensure GitHub version has 'v' prefix for consistency
        let version = data.tag_name;
        if (!version.startsWith('v')) {
          version = `v${version}`;
        }
        
        // Check if the component is mounted before updating state
        if (!signal.aborted) {
          setGithubVersion(version);
          setLoading(false);
        }
      } catch (err) {
        // Update error if not an abort and component is still mounted
        if (err.name !== 'AbortError' && !signal.aborted) {
          console.error('Error fetching latest version:', err);
          setError('Unable to fetch the latest version');
          setLoading(false);
        }
      }
    };
    
    fetchLatestVersion();
    
    // Cleanup
    return () => {
      abortController.abort();
    };
  }, []);

  if (loading) {
    return <p>Checking documentation version...</p>;
  }

  if (error) {
    return <p>Error checking version: {error}</p>;
  }

  // Compare versions
  const versionsMatch = installedVersion === githubVersion;
  
  if (versionsMatch) {
    return <p>Viewing the latest documentation: <strong>{installedVersion}</strong></p>;
  } else {
    return (
      <>
        <p>
          Viewing documentation for <strong>{installedVersion}</strong>.
        </p>
        <p>
          A newer version is available on <a href={githubRepoUrl}>Github</a> (<strong>{githubVersion}</strong>) & documentation will be updated shortly.
        </p>
      </>
    );
  }
}

export default VersionChecker;
