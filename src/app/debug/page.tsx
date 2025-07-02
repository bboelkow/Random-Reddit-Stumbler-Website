"use client";

export default function DebugPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-8">Browser Compatibility Debug Page</h1>
      
      <div className="space-y-8">
        {/* Browser Detection */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Browser Information</h2>
          <div id="browser-info" className="space-y-2">
            <p><strong>User Agent:</strong> {typeof window !== 'undefined' ? navigator.userAgent : 'N/A'}</p>
            <p><strong>Platform:</strong> {typeof window !== 'undefined' ? navigator.platform : 'N/A'}</p>
            <p><strong>Viewport:</strong> {typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : 'N/A'}</p>
          </div>
        </div>

        {/* Button Tests */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Button Styling Tests</h2>
          <div className="flex flex-wrap gap-4">
            {/* Tailwind Button */}
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Tailwind Button
            </button>
            
            {/* Inline Style Button */}
            <button 
              style={{ 
                backgroundColor: '#ea580c', 
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: '2px solid #ea580c',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Inline Style Button
            </button>
            
            {/* Hero Button Style */}
            <button className="hero-button rounded-lg px-6 py-3 text-sm font-semibold">
              Hero Button Style
            </button>
            
            {/* CSS Custom Properties */}
            <button 
              style={{ 
                backgroundColor: 'var(--color-yellow, #fbb040)', 
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: '2px solid var(--color-yellow, #fbb040)',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              CSS Custom Properties
            </button>
          </div>
        </div>

        {/* CSS Variable Test */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">CSS Variables Test</h2>
          <div className="space-y-2">
            <div className="h-8 bg-primary rounded" title="Primary Color"></div>
            <div className="h-8 bg-yellow rounded" title="Yellow Color"></div>
            <div className="h-8 rounded" style={{ backgroundColor: 'var(--color-primary)' }} title="CSS Variable Primary"></div>
            <div className="h-8 rounded" style={{ backgroundColor: 'var(--color-yellow)' }} title="CSS Variable Yellow"></div>
          </div>
        </div>

        {/* Font Test */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Font Rendering Test</h2>
          <div className="space-y-2">
            <p className="text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>Inter Font (Direct)</p>
            <p className="text-lg font-inter">Inter Font (Tailwind)</p>
            <p className="text-lg">Default Font</p>
          </div>
        </div>

        {/* Computed Styles */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Computed Styles</h2>
          <button 
            id="test-button"
            className="hero-button rounded-lg px-6 py-3 text-sm font-semibold"
            onClick={() => {
              if (typeof window !== 'undefined') {
                const button = document.getElementById('test-button');
                if (button) {
                  const styles = window.getComputedStyle(button);
                  const info = document.getElementById('computed-styles');
                  if (info) {
                    info.innerHTML = `
                      <p><strong>Background Color:</strong> ${styles.backgroundColor}</p>
                      <p><strong>Border:</strong> ${styles.border}</p>
                      <p><strong>Color:</strong> ${styles.color}</p>
                      <p><strong>Font Family:</strong> ${styles.fontFamily}</p>
                      <p><strong>Display:</strong> ${styles.display}</p>
                    `;
                  }
                }
              }
            }}
          >
            Click to Show Computed Styles
          </button>
          <div id="computed-styles" className="mt-4 text-sm"></div>
        </div>
      </div>
    </div>
  );
}
