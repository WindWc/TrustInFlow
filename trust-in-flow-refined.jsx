import React, { useState } from 'react';

// Brand Colors
const colors = {
  teal: '#3582A9',
  darkBlue: '#003366',
  green: '#9BBB59',
  lightGrey: '#999999',
  darkGrey: '#333333',
  white: '#FFFFFF',
  offWhite: '#FAFAFA',
  border: '#E5E5E5',
};

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

// Logo Component - Uses the brand logo image
const Logo = ({ size = 40 }) => (
  <img
    src="./logo.png"
    alt="Trust In Flow"
    style={{
      width: size,
      height: size,
      objectFit: 'contain',
    }}
  />
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
      background: colors.white,
      color: colors.darkGrey,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }}>
      <Logo size={80} />
      <h1 style={{
        color: colors.darkBlue,
        fontWeight: 300,
        fontSize: 'clamp(24px, 5vw, 32px)',
        marginTop: 24,
        marginBottom: 8,
        letterSpacing: '-0.5px',
      }}>
        Trust In Flow
      </h1>
      <p style={{
        color: colors.lightGrey,
        fontSize: 12,
        letterSpacing: 3,
        textTransform: 'uppercase',
        marginBottom: 48,
      }}>
        Integration Practices
      </p>

      {!selectedName ? (
        <div style={{ width: '100%', maxWidth: 340 }}>
          <p style={{
            textAlign: 'center',
            marginBottom: 24,
            color: colors.darkGrey,
            fontSize: 15,
          }}>
            Welcome. Please select your name:
          </p>
          {Object.keys(clientContent).map(key => (
            <button
              key={key}
              onClick={() => setSelectedName(key)}
              style={{
                width: '100%',
                padding: '16px 24px',
                marginBottom: 12,
                borderRadius: 8,
                border: `1px solid ${colors.border}`,
                background: colors.white,
                color: colors.darkBlue,
                fontSize: 17,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = colors.teal;
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(53,130,169,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = colors.border;
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
              }}
            >
              {clientContent[key].name}
            </button>
          ))}
        </div>
      ) : (
        <div style={{ width: '100%', maxWidth: 340 }}>
          <p style={{
            textAlign: 'center',
            marginBottom: 24,
            color: colors.darkGrey,
            fontSize: 15,
          }}>
            Welcome, <span style={{ color: colors.teal, fontWeight: 500 }}>{clientContent[selectedName].name}</span>
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(''); }}
            onKeyPress={(e) => e.key === 'Enter' && handleEnter()}
            placeholder="Enter password"
            autoFocus
            style={{
              width: '100%',
              padding: 16,
              borderRadius: 8,
              border: `1px solid ${error ? '#e74c3c' : colors.border}`,
              background: colors.white,
              color: colors.darkGrey,
              fontSize: 16,
              textAlign: 'center',
              outline: 'none',
              boxSizing: 'border-box',
              marginBottom: 8,
              transition: 'border-color 0.2s ease',
            }}
            onFocus={(e) => e.target.style.borderColor = colors.teal}
            onBlur={(e) => e.target.style.borderColor = error ? '#e74c3c' : colors.border}
          />
          {error && (
            <p style={{
              color: '#e74c3c',
              textAlign: 'center',
              marginBottom: 8,
              fontSize: 14,
            }}>
              {error}
            </p>
          )}
          <button
            onClick={handleEnter}
            style={{
              width: '100%',
              padding: 16,
              borderRadius: 8,
              border: 'none',
              background: colors.teal,
              color: colors.white,
              fontSize: 16,
              fontWeight: 500,
              cursor: 'pointer',
              marginBottom: 12,
              transition: 'background 0.2s ease',
            }}
            onMouseOver={(e) => e.currentTarget.style.background = colors.darkBlue}
            onMouseOut={(e) => e.currentTarget.style.background = colors.teal}
          >
            Enter
          </button>
          <button
            onClick={() => { setSelectedName(null); setPassword(''); setError(''); }}
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              color: colors.lightGrey,
              cursor: 'pointer',
              padding: 8,
              fontSize: 14,
              transition: 'color 0.2s ease',
            }}
            onMouseOver={(e) => e.currentTarget.style.color = colors.teal}
            onMouseOut={(e) => e.currentTarget.style.color = colors.lightGrey}
          >
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
        background: colors.white,
        borderRadius: 12,
        border: `1px solid ${isExpanded ? colors.teal : colors.border}`,
        padding: '20px 24px',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        boxShadow: isExpanded
          ? '0 4px 20px rgba(53,130,169,0.12)'
          : '0 1px 3px rgba(0,0,0,0.04)',
      }}
      onMouseOver={(e) => {
        if (!isExpanded) {
          e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
        }
      }}
      onMouseOut={(e) => {
        if (!isExpanded) {
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
        }
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 16,
      }}>
        <div style={{ flex: 1 }}>
          <h3 style={{
            color: colors.darkBlue,
            fontSize: 16,
            fontWeight: 600,
            marginBottom: 4,
            lineHeight: 1.4,
          }}>
            {practice.title}
          </h3>
          <p style={{
            color: colors.lightGrey,
            fontSize: 13,
            margin: 0,
          }}>
            {practice.subtitle}
          </p>
        </div>
        <span style={{
          color: colors.teal,
          fontSize: 12,
          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.25s ease',
          marginTop: 4,
        }}>
          ▼
        </span>
      </div>

      {isExpanded && (
        <div style={{
          marginTop: 20,
          paddingTop: 20,
          borderTop: `1px solid ${colors.border}`,
        }}>
          <div style={{
            color: colors.darkGrey,
            fontSize: 14,
            lineHeight: 1.75,
            whiteSpace: 'pre-wrap',
          }}>
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
      background: colors.offWhite,
      color: colors.darkGrey,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    }}>
      {/* Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${colors.border}`,
        padding: '12px 24px',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}>
            <Logo size={36} />
            <span style={{
              color: colors.darkBlue,
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: '-0.3px',
            }}>
              Trust In Flow
            </span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}>
            <span style={{
              color: colors.lightGrey,
              fontSize: 14,
            }}>
              {data.name}
            </span>
            <button
              onClick={onLogout}
              style={{
                padding: '8px 16px',
                borderRadius: 6,
                border: `1px solid ${colors.border}`,
                background: colors.white,
                color: colors.darkGrey,
                fontSize: 14,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = colors.teal;
                e.currentTarget.style.color = colors.teal;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = colors.border;
                e.currentTarget.style.color = colors.darkGrey;
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: 'clamp(16px, 4vw, 32px)',
      }}>
        {/* Top Section: Intro + Personal Recommendations */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
          gap: 24,
          marginBottom: 48,
        }}>

          {/* Intro Card */}
          <div style={{
            background: colors.white,
            borderRadius: 16,
            border: `1px solid ${colors.border}`,
            padding: 'clamp(20px, 4vw, 32px)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          }}>
            <div style={{
              width: 48,
              height: 4,
              background: colors.green,
              borderRadius: 2,
              marginBottom: 20,
            }} />
            <h2 style={{
              color: colors.darkBlue,
              fontSize: 'clamp(18px, 3vw, 22px)',
              fontWeight: 600,
              marginBottom: 16,
              lineHeight: 1.3,
            }}>
              {introContent.title}
            </h2>
            <p style={{
              color: colors.darkGrey,
              fontSize: 15,
              lineHeight: 1.7,
              whiteSpace: 'pre-wrap',
              margin: 0,
            }}>
              {introContent.text}
            </p>
          </div>

          {/* Personal Recommendations Card */}
          <div style={{
            background: colors.white,
            borderRadius: 16,
            border: `1px solid ${colors.teal}20`,
            padding: 'clamp(20px, 4vw, 32px)',
            boxShadow: '0 1px 3px rgba(53,130,169,0.06)',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 20,
            }}>
              <div>
                <div style={{
                  width: 48,
                  height: 4,
                  background: colors.teal,
                  borderRadius: 2,
                  marginBottom: 16,
                }} />
                <h2 style={{
                  color: colors.darkBlue,
                  fontSize: 'clamp(18px, 3vw, 22px)',
                  fontWeight: 600,
                  marginBottom: 6,
                }}>
                  What's True & Possible
                </h2>
                <p style={{
                  color: colors.teal,
                  fontSize: 14,
                  margin: 0,
                }}>
                  For {data.name} • {data.date}
                </p>
              </div>
              <button
                onClick={() => setShowPersonal(!showPersonal)}
                style={{
                  background: colors.offWhite,
                  border: 'none',
                  color: colors.teal,
                  fontSize: 18,
                  cursor: 'pointer',
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s ease',
                }}
                onMouseOver={(e) => e.currentTarget.style.background = colors.border}
                onMouseOut={(e) => e.currentTarget.style.background = colors.offWhite}
              >
                {showPersonal ? '−' : '+'}
              </button>
            </div>

            {showPersonal && (
              <div style={{
                maxHeight: 400,
                overflowY: 'auto',
                paddingRight: 8,
              }}>
                {data.sections.map((section, i) => (
                  <div key={i} style={{ marginBottom: 24 }}>
                    <h4 style={{
                      color: colors.darkBlue,
                      fontSize: 14,
                      fontWeight: 600,
                      marginBottom: 12,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>
                      {section.title}
                    </h4>
                    {section.items.map((item, j) => (
                      <div key={j} style={{
                        display: 'flex',
                        gap: 12,
                        marginBottom: 10,
                      }}>
                        <span style={{
                          color: colors.green,
                          flexShrink: 0,
                          fontSize: 10,
                          marginTop: 6,
                        }}>
                          ●
                        </span>
                        <span style={{
                          color: colors.darkGrey,
                          fontSize: 14,
                          lineHeight: 1.6,
                        }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Section Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          marginBottom: 32,
        }}>
          <div style={{
            flex: 1,
            height: 1,
            background: colors.border,
          }} />
          <h2 style={{
            color: colors.darkBlue,
            fontSize: 18,
            fontWeight: 600,
            margin: 0,
            whiteSpace: 'nowrap',
          }}>
            The 12 Practices
          </h2>
          <div style={{
            flex: 1,
            height: 1,
            background: colors.border,
          }} />
        </div>

        {/* Practice Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 380px), 1fr))',
          gap: 16,
        }}>
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
        <footer style={{
          textAlign: 'center',
          marginTop: 64,
          paddingTop: 32,
          borderTop: `1px solid ${colors.border}`,
        }}>
          <p style={{
            color: colors.lightGrey,
            fontSize: 14,
            margin: 0,
          }}>
            Diana H. Dokos • Trust In Flow •{' '}
            <a
              href="mailto:diana@trustinflow.com"
              style={{
                color: colors.teal,
                textDecoration: 'none',
              }}
              onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              diana@trustinflow.com
            </a>
          </p>
        </footer>
      </main>
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
