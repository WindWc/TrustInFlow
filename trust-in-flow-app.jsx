import React, { useState } from 'react';

const practices = [
  { id: 'p1', title: '1. Embrace Your Authentic Self', subtitle: 'Connect with your Soul\'s Journey', content: 'As creatures of "free will", we are in Choice. We get to choose to connect with our Higher Nature, our Authentic/Higher Self, with the Divine/Source.\n\nWhen we do so, All of Creation and reality shifts to realign with this intention and commitment.\n\nThe Universe conspires on our behalf. For every ½ step we take, the Universe takes 1,000 to meet us.\n\nThere are principles, practices, tools, and resources that assist us in connecting with the Divine & with Right Relationship/Flow within ourselves, others, Land, projects, and All of Life.\n\nIt is up to You to choose them and use them.' },
  { id: 'p2', title: '2. Practice Being in Ayni', subtitle: 'Right Relationship & Flow', content: 'Coming into "Ayni"/Right Relationship/Flow is a remarkably swift, powerful way of stepping into grace, ease, harmony, flow, integrity, and alignment with what is really True & Possible.\n\nYou\'ll know it when you\'re in it, because you\'ll feel it. You\'ll just Know. Things will land. They "feel right".\n\nIt IS the Flow state. It\'s the essence of living and creating from the Authentic & Higher Self/True Nature.\n\nWillingness is Key.\n\nComing into Right Relationship/Flow IS what shifts struggle, hard work, scarcity, separation, drama, conflict, illness, and loss into grace, ease, harmony, flow, Oneness, abundance, and more.' },
  { id: 'p3', title: '3. Levels of Engagement', subtitle: 'Work from the energetic first', content: 'Remember: All things are Energy & Intention before they are anything else. So start there!\n\nThe Five Levels:\n\nLevel 1: Energetic/Spiritual — The foundation of all creation\n\nLevel 2: Heart/Soul — Where true connection lives\n\nLevel 3: Relational/Right Relation — How we connect with others\n\nLevel 4: Mind/Emotion/Language/Beliefs — The stories we tell\n\nLevel 5: Physical/Body/Form/Finance/Action — Manifest reality\n\nTo create true change, one must go 1-2 or more Levels UP to address the person, situation, or issue.\n\nTo create Grace, Ease, Harmony, Flow: Work Opportunities, Needs, Issues, Situations at the Energetic Level First.' },
  { id: 'p4', title: '4. Open Sacred Space', subtitle: 'Call on the Divine to guide', content: 'Opening Sacred Space (or opening the space in Prayer) is a way of actively Calling on the Divine to guide the process; work closely with you; protect you, your space and your creations; work outside of & beyond limitations & conditions; and work across time, space & dimension.\n\nOpening Sacred Space:\n• Stabilizes the space within and around the person(s), situation(s) and creation(s)\n• Reminds us that we are not Alone — we have Sacred Helpers & a Celestial Team of Guides\n• Reminds us that we are part of Something Greater — it is not up to us to "figure it out" on our own\n• Supports alignment and the actualization of Potentials beyond limited human understanding\n\nImportant: Be sure to open AND close Sacred Space. Closing sacred space is equally important.' },
  { id: 'p5', title: '5. Tap Into Essence', subtitle: 'Daily practice for divine connection', content: 'Tapping into Essence is an immediate & powerful way to support your direct connection to your own Divine Intelligence and Source energy.\n\nImmediate benefits include: shifting & up-leveling your electromagnetic field, which increases Higher Self alignment and what you attract & repel.\n\nHow to Practice:\n\n1. Open Sacred Space\n2. Drop In, Breathe (Full Body Breath)\n3. Tap into Essence, Breathe into Essence\n4. Fill up on It — let Essence inform every cell and all aspects of your Being\n5. Savor It\n6. Allow all that is Not Essence to fall away\n7. Better yet, Blow Heaviness In A Stone!\n8. Rest into Essence, be informed by It\n\nBe, create, manifest, attract, build, lead & serve from Essence.\n\nIt may sound "Woo Woo", but try it! It Works!!' },
  { id: 'p6', title: '6. Blow It In A Stone', subtitle: 'Release what doesn\'t serve', content: 'Bottom Line: You do NOT have to be a container for stress, overwhelm, heaviness, pain, illness or disharmony.\n\nYou can offload stress, anxiety, deactivate imprints and release other heavy/dense energy so that it doesn\'t have to live in the body. Let that energy live in a stone, match stick, or leaf — which will decompose/transmute it.\n\nHow to Practice:\n\n1. Find a stone, match stick, leaf or other natural object\n2. Drop In, breathe into the activated or uncomfortable areas of the body\n3. Using breath & focused Intention, collect up any activated, heavy, dense, constricted energy\n4. Blow it (from that area of the body) into the object\n5. Let heavy/dense/stressful energy live in the stone — NOT in your body\n\nTo go deeper, get curious:\n• Where is it held in the body?\n• What are the primary emotions?\n• Are there thoughts, beliefs, stories associated?\n• Does the energy feel masculine, feminine, mixed, or neutral?\n• Do any images arise?\n• How "old" does the energy feel?\n\nYou will likely feel much lighter, clearer, freer, relieved and able to focus again.' },
  { id: 'p7', title: '7. Lean Into What Is True & Possible', subtitle: 'Daily practice for new realities', content: 'After receiving Imprint Clearings & Essence Illuminations, clients are often able to embrace whole new ways of Being and Doing to actualize potentials they could not actualize before.\n\nThis practice requires learning how to lean into the "New", the "Unfamiliar", continue leaning in through "The Gap", into "The Unknown" and out the other side — rather than returning to the comfort of Familiar patterns, choices and habits.\n\nThe mind & the ego often resist this. Do It Anyway.\n\nDaily Practice:\n\n1. When you awaken, Remember what you would most love to "Discover Is Actually True & Possible"\n2. Consciously choose aligned thoughts, beliefs, communications, choices and actions\n3. Physically get up and "turn toward" and "lean into" these Intentions\n4. Witness the Guidance, uplift in energy, and momentum that emerges\n5. If resistance comes — acknowledge it, but don\'t get hooked\n6. "Ask" to Be "Shown" by the Divine what is possible\n\nFor every ½ step of willingness & faith you take, the Universe will take 1,000 steps to meet you.\n\nCelebrate when you make progress. Celebrate when you see evidence of the Shift.' },
  { id: 'p8', title: '8. Open A Sand Painting', subtitle: 'A conscious creation power tool', content: 'Opening a Sand Painting is an essential Conscious Creators "power tool", as it can work multiple topics on multiple levels simultaneously.\n\nSand Paintings create a Sacred Space or "Container" to hold the energy of something you\'re processing, clearing, manifesting and/or creating.\n\nWhat Sand Paintings Do:\n\n• Process opportunities, manifest resources\n• Bring "Ayni"/Right Relationship in multiple areas of life swiftly & simultaneously\n• Serve as a healing tool for physical, mental, or emotional pain\n• Support inner work — move/clear/heal/deactivate energetically before engaging others\n• Support Conscious Creation activities by bringing greater clarity, alignment, and flow\n• Catch and address issues, challenges, patterns, and imprints Early On — before they take form\n\nImportant: Sand Paintings can remain open for up to 5 days, but must be actively "worked" and closed when complete.\n\nSee Diana\'s "Sand Painting Instructions" for the full process.' },
  { id: 'p9', title: '9. Conscious Communication', subtitle: 'Work with feelings & needs', content: 'To create true harmony (internally & externally), communicate more consciously & effectively, more efficiently identify aligned approaches, and manifest more aligned resources:\n\nRemember:\n\n• Feelings (light/positive & heavy/negative) point to Needs & Values (met or unmet)\n• Activated, strong or "triggered" Feelings point to activated Imprints, not to Truth\n• Feelings are not explanations or Stories! Feelings are 1 word (happy, sad, excited, etc.)\n• "Feels like…" usually means a Story is coming, not a Feeling\n\nPractice differentiating between:\n• Feelings\n• Needs/Values\n• "Stories"/Explanations/Justifications\n• Old Strategies (that come at a Cost)\n• vs. Aligned Approaches\n\nWhen you can clearly identify Needs & Values, you can more easily call on the Divine to help identify and manifest the best Aligned Approaches & Resources.\n\nTo learn more, read "Non-Violent Communication" by Marshall Rosenberg.' },
  { id: 'p10', title: '10. Take Aligned Action', subtitle: 'Conscious engagement in 6 steps', content: 'Step 1: When Opportunities, Needs, Issues, or Situations arise — Consciousness & Connection come First. Aligned Action is equal but second.\n\nTake your thoughts & actions to the Energetic/Spiritual Level first: Connect with Essence, Open Sacred Space, Call on your Higher Team, Open a Sand Painting.\n\nStep 2: If an issue feels charged, or you want to "figure it out" or "fix it" — DO NOT TALK ABOUT IT or TRY to FIGURE IT OUT using the mind. Use energetic tools first.\n\nStep 3: "Blow it in a Stone" — You do not have to be a container for fear, worry, stress, drama, scarcity, illness, loss or pain.\n\nStep 4: Shift Perspective/Beliefs/Language — Frame language in the Positive to manifest what you DO Want.\n\nStep 5: Take Action Steps in the direction of what you Do Want/Love/are saying "YES" to. Watch how quickly reality shifts when you do.\n\nStep 6: You Will Be Invited to Grow & Change — Lean into the fire of discomfort. Surrender. Let Go. Let it be your Initiation into extraordinary new Possibilities.' },
  { id: 'p11', title: '11. Shift Your Perception', subtitle: 'How we see creates reality', content: 'How we See, Creates… and creates ripple effects.\n\nThis is the Heisenberg "Observer Effect" in action. Take Full Responsibility for how you choose to See & Relate to things — regardless of what is going on around you.\n\nThis is a Game Changer.\n\nHow we see, hold and talk about people, situations & things HOLDS people, situations & things in that state.\n\nPractice "Seeing":\n• The Opportunity\n• The Gift\n• The Invitation\n• The Presence of the Divine\n\nRather than:\n• "Problems to Fix"\n• "Challenges to Overcome"\n• Negative Predictions projected onto the Future based on Past Experience\n\nThis takes practice, commitment, and self-mastery. Be patient with yourself, others, and the organic unfolding of your projects.\n\nDo your shadow work, so you don\'t Project your wounded stories or imprints on others. Period. This Is Essential.' },
  { id: 'p12', title: '12. Call In Support', subtitle: 'Get help before problems arise', content: 'Be Proactive. Don\'t wait for "struggle", "problems", "challenges" or "difficulties" to arise before you shift, or Call In aligned support.\n\nIf you\'re wanting to make serious and sustainable breakthroughs, get session work. Having facilitated support can make a world of difference, as it can empower you to catch & shift things early on.\n\nWork with aligned support:\n• Conscious consultant or coach\n• Facilitator of change\n• Body worker\n• Shamanic practitioner\n• Business development specialist\n\nRemember & Trust: When you say "YES", aligned Resources (people, opportunities, teachings, tools, practices, financial & non-financial forms of abundance and support) will show up "Out of the Blue".\n\nSo pay attention. Then, Celebrate!\n\nMake the Most of these Moments. And watch the Universe give you more!\n\n---\n\nIf you want or need additional support, reach out to an IHP or BIZ Practitioner or to Diana.\n\nFind out What Is Really True & Possible for You, your Team, your Project, Creation, Community, Business.' }
];

const clientContent = {
  melanie: {
    name: 'Melanie',
    password: 'melanie2026',
    date: 'January 17-21, 2026',
    sections: [
      { title: 'Family', items: ['I can love my family in an extraordinary way that is healing, enlightening, fulfilling, gratifying, whole and unifying — with light bonds, lots of light.', 'The ceiling is gone.', 'The blocks and boundaries are gone.'] },
      { title: 'My Creativity', items: ['It can flow out of me easily, freely, and is in perfect flow as it emerges.', 'There\'s no hesitation, no blocks.', 'It serves as an expression of self and soul and the endless possibilities that can flow through me.', 'I can create without being selfish.', 'I can bless others while blessing myself.', 'I can bless others by creating in my own way and by opening my soul and expression.', 'It enables self-care and other-care at the same time in synchronicity and synchronization, in rhythm and harmony.', 'I\'m feeling a connection to many of the gifts and inspirations that have been waiting to come through me.', 'They are weightless, and yet so tremendous and so eternal.', 'They are who I was and who I will always be at my Essence.', 'Remember not to burden myself as I seek inspiration from above, especially when I encounter another person\'s opportunity to grow.', 'I feel free to live in that Essence, in my happy place, in that joyful place, even when in empathy and when caring for the well-being of others.', 'Both sides of my thinking feel freer.', 'I will hear more music.', 'I will see more color.', 'I will see and tap into old gifts and talents.'] },
      { title: 'Brian', items: ['It is possible that we are eternal soul partners.', 'We can help each other to actualize our soul potential and creativity.', 'This feels like a second soul, a whole soul.', 'We amplify each other\'s wholeness.', 'Our resonance is like notes in a scale that play together.', 'We can partner on physical and real projects while navigating our sameness and difference.', 'Anything is possible now.', 'We can do anything, wholly and separately.', 'I believe in his capacity to navigate my big, powerful, beautiful, seeming chaos of creativity.'] },
      { title: 'Jane', items: ['I see the brightness in her.', 'I want to help her find her brightest soul.', 'I can be a partner/parent in helping to manifest and reflect that to her — as a gift to her mother, as a gift from me as a woman.', 'She can spread her wings and fly in ways that will most fulfill her.', 'I can welcome her/allow her in my space so long as it is beneficial to her and to all, to the brightest and lightest solution and means to grow.', 'She will know when it\'s time to move on and how best to do it.'] },
      { title: 'For Me', items: ['I can be a truly great mother in the incubation of ideas and planting of seeds, not only in projects, but in people and in their journey.', 'For the animals in my life too.', 'To reach the greatest potential I have in this life and to carry it on.', 'To do so in the ways that my Creator would have me do so.'] },
      { title: 'Skyler and Hannah', items: ['To grow into my relationship with them.', 'To be needed, but in a healthy sense.', 'To be an influence for Light and Good.', 'He has managed to live his own life without these imprints and is becoming his brightest version of self.', 'This is true for my Grand Babies too.'] }
    ]
  },
  brian: {
    name: 'Brian',
    password: 'brian2026',
    date: 'January 2026',
    sections: [{ title: 'Coming Soon', items: ['Brian\'s personalized "What\'s True & Possible" content will be added here once received.', 'Check back soon or contact Diana for your complete integration guide.'] }]
  }
};

const introContent = {
  title: 'Integration & Up-Leveling Practices for Conscious Creators',
  text: `As human beings — and especially as Transformational Leaders, Change Makers, Land Stewards, Project Developers, Human Potential Facilitators & Conscious Community Leaders — we are constantly creating.

To become more Conscious Creators rather than Unconscious Creators. To more fully access, embody, and relate from the Authentic/Higher Self (aka Essence/Divine Potential).

To cultivate greater capacities for creating thriving lives of grace, ease, harmony, flow, inspiration and right relationship — from the inside out and the outside in.`
};

const GoldenOrb = ({ size = 40 }) => (
  <div style={{
    width: size, height: size, borderRadius: '50%', flexShrink: 0,
    background: 'radial-gradient(circle at 30% 30%, #fcd34d, #b45309 70%, #78350f)',
    boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)'
  }} />
);

// LOGIN SCREEN
function LoginScreen({ onLogin }) {
  const [selectedName, setSelectedName] = useState(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEnter = () => {
    if (!selectedName) return;
    if (password === clientContent[selectedName].password) {
      onLogin(selectedName);
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
      color: '#bfdbfe',
      fontFamily: 'system-ui, sans-serif',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24
    }}>
      <GoldenOrb size={64} />
      <h1 style={{ color: '#fcd34d', fontFamily: 'Georgia, serif', fontSize: 28, marginTop: 24, marginBottom: 8 }}>Trust In Flow</h1>
      <p style={{ color: 'rgba(191,219,254,0.6)', fontSize: 12, letterSpacing: 3, marginBottom: 48 }}>INTEGRATION PRACTICES</p>
      
      {!selectedName ? (
        <div style={{ width: '100%', maxWidth: 320 }}>
          <p style={{ textAlign: 'center', marginBottom: 24 }}>Welcome. Please select your name:</p>
          {Object.keys(clientContent).map(key => (
            <button key={key} onClick={() => setSelectedName(key)} style={{
              width: '100%', padding: 16, marginBottom: 12, borderRadius: 8,
              border: '1px solid rgba(245,158,11,0.3)', background: 'rgba(30,41,59,0.5)',
              color: '#fef3c7', fontSize: 18, cursor: 'pointer', fontFamily: 'Georgia, serif'
            }}>
              {clientContent[key].name}
            </button>
          ))}
        </div>
      ) : (
        <div style={{ width: '100%', maxWidth: 320 }}>
          <p style={{ textAlign: 'center', marginBottom: 24 }}>
            Welcome, <span style={{ color: '#fcd34d' }}>{clientContent[selectedName].name}</span>
          </p>
          <input
            type="password" value={password}
            onChange={(e) => { setPassword(e.target.value); setError(''); }}
            onKeyPress={(e) => e.key === 'Enter' && handleEnter()}
            placeholder="Enter password" autoFocus
            style={{
              width: '100%', padding: 16, borderRadius: 8, border: '1px solid rgba(245,158,11,0.3)',
              background: 'rgba(30,41,59,0.5)', color: '#fef3c7', fontSize: 16, textAlign: 'center',
              outline: 'none', boxSizing: 'border-box', marginBottom: 8
            }}
          />
          {error && <p style={{ color: '#f87171', textAlign: 'center', marginBottom: 8 }}>{error}</p>}
          <button onClick={handleEnter} style={{
            width: '100%', padding: 16, borderRadius: 8, border: 'none',
            background: 'linear-gradient(135deg, #d97706, #b45309)', color: 'white',
            fontSize: 18, cursor: 'pointer', marginBottom: 12
          }}>Enter</button>
          <button onClick={() => { setSelectedName(null); setPassword(''); setError(''); }}
            style={{ width: '100%', background: 'transparent', border: 'none', color: 'rgba(147,197,253,0.6)', cursor: 'pointer', padding: 8 }}>
            ← Choose different name
          </button>
        </div>
      )}
    </div>
  );
}

// PRACTICE CARD (expandable)
function PracticeCard({ practice, isExpanded, onToggle }) {
  return (
    <div 
      onClick={onToggle}
      style={{
        background: 'rgba(30,41,59,0.6)',
        borderRadius: 12,
        border: isExpanded ? '1px solid rgba(251,191,36,0.5)' : '1px solid rgba(245,158,11,0.2)',
        padding: 20,
        cursor: 'pointer',
        transition: 'all 0.3s'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3 style={{ color: '#fcd34d', fontFamily: 'Georgia, serif', fontSize: 16, marginBottom: 4 }}>{practice.title}</h3>
          <p style={{ color: 'rgba(191,219,254,0.6)', fontSize: 13 }}>{practice.subtitle}</p>
        </div>
        <span style={{ color: '#fbbf24', fontSize: 18, transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
      </div>
      
      {isExpanded && (
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(245,158,11,0.2)' }}>
          <div style={{ color: 'rgba(191,219,254,0.9)', fontSize: 14, lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
            {practice.content}
          </div>
        </div>
      )}
    </div>
  );
}

// MAIN APP
function MainApp({ client, onLogout }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const [showPersonal, setShowPersonal] = useState(true);
  const data = clientContent[client];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
      color: '#bfdbfe',
      fontFamily: 'system-ui, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(245,158,11,0.2)',
        padding: '12px 24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <GoldenOrb size={32} />
          <span style={{ color: '#fcd34d', fontFamily: 'Georgia, serif', fontSize: 18 }}>Trust In Flow</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ color: 'rgba(191,219,254,0.6)', fontSize: 14 }}>{data.name}</span>
          <button onClick={onLogout} style={{
            padding: '8px 16px', borderRadius: 6, border: '1px solid rgba(245,158,11,0.3)',
            background: 'transparent', color: 'rgba(191,219,254,0.8)', fontSize: 14, cursor: 'pointer'
          }}>Exit</button>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
        {/* Top Section: Intro + Personal Recommendations side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 48 }}>
          
          {/* Intro */}
          <div style={{
            background: 'rgba(30,41,59,0.6)', borderRadius: 16,
            border: '1px solid rgba(245,158,11,0.2)', padding: 24
          }}>
            <GoldenOrb size={40} />
            <h2 style={{ color: '#fcd34d', fontFamily: 'Georgia, serif', fontSize: 22, marginTop: 16, marginBottom: 12 }}>
              {introContent.title}
            </h2>
            <p style={{ color: 'rgba(191,219,254,0.85)', fontSize: 15, lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
              {introContent.text}
            </p>
          </div>

          {/* Personal Recommendations */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(120,53,15,0.3), rgba(30,41,59,0.6))',
            borderRadius: 16, border: '1px solid rgba(251,191,36,0.3)', padding: 24
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <div>
                <h2 style={{ color: '#fcd34d', fontFamily: 'Georgia, serif', fontSize: 22, marginBottom: 4 }}>
                  What's True & Possible
                </h2>
                <p style={{ color: 'rgba(251,191,36,0.7)', fontSize: 14 }}>For {data.name} • {data.date}</p>
              </div>
              <button 
                onClick={() => setShowPersonal(!showPersonal)}
                style={{ background: 'transparent', border: 'none', color: '#fbbf24', fontSize: 20, cursor: 'pointer' }}
              >
                {showPersonal ? '−' : '+'}
              </button>
            </div>
            
            {showPersonal && (
              <div style={{ maxHeight: 400, overflowY: 'auto', paddingRight: 8 }}>
                {data.sections.map((section, i) => (
                  <div key={i} style={{ marginBottom: 20 }}>
                    <h4 style={{ color: '#fbbf24', fontSize: 15, marginBottom: 8, fontWeight: 600 }}>{section.title}</h4>
                    {section.items.map((item, j) => (
                      <div key={j} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                        <span style={{ color: 'rgba(251,191,36,0.5)', flexShrink: 0 }}>◇</span>
                        <span style={{ color: 'rgba(191,219,254,0.85)', fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(245,158,11,0.3)' }} />
          <h2 style={{ color: '#fcd34d', fontFamily: 'Georgia, serif', fontSize: 20 }}>The 12 Practices</h2>
          <div style={{ flex: 1, height: 1, background: 'rgba(245,158,11,0.3)' }} />
        </div>

        {/* Practice Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: 16 }}>
          {practices.map((practice) => (
            <PracticeCard
              key={practice.id}
              practice={practice}
              isExpanded={expandedCard === practice.id}
              onToggle={() => setExpandedCard(expandedCard === practice.id ? null : practice.id)}
            />
          ))}
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(245,158,11,0.2)' }}>
          <p style={{ color: 'rgba(147,197,253,0.5)', fontSize: 13 }}>
            Diana H. Dokos • Trust In Flow • <a href="mailto:diana@trustinflow.com" style={{ color: 'rgba(251,191,36,0.6)' }}>diana@trustinflow.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

// ROOT
export default function App() {
  const [client, setClient] = useState(null);

  if (!client) {
    return <LoginScreen onLogin={setClient} />;
  }

  return <MainApp client={client} onLogout={() => setClient(null)} />;
}
