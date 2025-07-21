import React from 'react';
import { Input, Divider } from 'antd';
import { ItalicOutlined, MinusOutlined } from '@ant-design/icons';
import styles from './index.module.less';

const StrategicAdvisorDashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img
            alt="Logo"
            src="https://weavefox.alipay.com/api/bolt/unsplash_image?keyword=abstract&width=20&height=8&random=abstract_20_8"
            className={styles.logoIcon}
          />
          <span className={styles.logoText}>V</span>
        </div>
        
        <div className={styles.searchSection}>
          <div className={styles.searchBar}>
            <Input
              placeholder="Search"
              prefix={
                <img
                  alt="Search icon"
                  src="https://weavefox.alipay.com/api/bolt/unsplash_image?keyword=search&width=12&height=15&random=search_12_15"
                  className={styles.searchIcon}
                />
              }
              suffix={<span className={styles.searchSuffix}>BK</span>}
              className={styles.searchInput}
            />
          </div>
          
          <div className={styles.navItems}>
            <div className={styles.navItem}>
              <img
                alt="Chat icon"
                src="https://weavefox.alipay.com/api/bolt/unsplash_image?keyword=chat&width=14&height=12&random=chat_14_12"
                className={styles.navIcon}
              />
              <span className={styles.navLabel}>Chat</span>
            </div>
            
            <div className={styles.navItem}>
              <img
                alt="Library icon"
                src="https://weavefox.alipay.com/api/bolt/unsplash_image?keyword=library&width=14&height=12&random=library_14_12"
                className={styles.navIcon}
              />
              <span className={styles.navLabel}>Library</span>
            </div>
            
            <div className={styles.navItem}>
              <img
                alt="Shared icon"
                src="https://weavefox.alipay.com/api/bolt/unsplash_image?keyword=share&width=14&height=12&random=share_14_12"
                className={styles.navIcon}
              />
              <span className={styles.navLabel}>Shared</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.mainContent}>
        <div className={styles.sidebar}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Favorites</h3>
            <p className={styles.sectionDescription}>
              Act as my personal strategic advisor with the following context:
            </p>
            
            <div className={styles.favoriteItem}>
              <div className={styles.favoriteIconGroup}>
                <img 
                  alt="Favorite icon" 
                  src="https://weavefox.alipay.com/api/bolt/unsplash_image?keyword=book&width=12&height=12&random=book_12_12" 
                  className={styles.favoriteIcon}
                />
                <img 
                  alt="Favorite icon" 
                  src="https://weavefox.alipay.com/api/bolt/unsplash_image?keyword=bookmark&width=12&height=12&random=bookmark_12_12" 
                  className={styles.favoriteIcon}
                />
              </div>
              <span className={styles.favoriteText}>How To Learn 10x Faster</span>
            </div>
            
            <div className={styles.favoriteItem}>
              <div className={styles.favoriteIconGroup}>
                <img 
                  alt="Book icon" 
                  src="https://weavefox.alipay.com/api/bolt/unsplash_image?keyword=book&width=12&height=12&random=book_12_12" 
                  className={styles.favoriteIcon}
                />
                <img 
                  alt="Profit icon" 
                  src="https://weavefox.alipay.com/api/bolt/unsplash_image?keyword=profit&width=12&height=12&random=profit_12_12" 
                  className={styles.favoriteIcon}
                />
              </div>
              <span className={styles.favoriteText}>Book: Purpose & Profit</span>
            </div>
            
            <div className={styles.promptsBadge}>
              <span className={styles.badgeText}>Prompts</span>
            </div>
            
            <div className={styles.favoriteItem}>
              <span className={styles.chevron}>></span>
              <img 
                alt="Reset icon" 
                src="https://weavefox.alipay.com/api/bolt/unsplash_image?keyword=reset&width=12&height=14&random=reset_12_14" 
                className={styles.favoriteIcon}
              />
              <span className={styles.favoriteText}>Simple Life Reset</span>
            </div>
            
            <div className={styles.favoriteItem}>
              <img 
                alt="Content icon" 
                src="https://weavefox.alipay.com/api/bolt/unsplash_image?keyword=content&width=12&height=12&random=content_12_12" 
                className={styles.favoriteIcon}
              />
              <span className={styles.favoriteText}>How To Create Good Content</span>
            </div>
            
            <div className={styles.favoriteItem}>
              <div className={styles.favoriteIconGroup}>
                <img 
                  alt="Meta icon" 
                  src="https://weavefox.alipay.com/api/bolt/unsplash_image?keyword=meta&width=12&height=10&random=meta_12_10" 
                  className={styles.favoriteIcon}
                />
                <img 
                  alt="Platform icon" 
                  src="https://weavefox.alipay.com/api/bolt/unsplash_image?keyword=platform&width=12&height=14&random=platform_12_14" 
                  className={styles.favoriteIcon}
                />
              </div>
              <span className={styles.favoriteText}>Meta</span>
            </div>
          </div>
          
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Documents</h3>
            <div className={styles.docActions}>
              <img 
                alt="Add document" 
                src="https://weavefox.alipay.com/api/bolt/unsplash_image?keyword=add&width=12&height=12&random=add_12_12" 
                className={styles.docActionIcon}
              />
              <img 
                alt="Sort documents" 
                src="https://weavefox.alipay.com/api/bolt/unsplash_image?keyword=sort&width=12&height=12&random=sort_12_12" 
                className={styles.docActionIcon}
              />
            </div>
            
            <div className={styles.documentItem}>
              <img 
                alt="Life plan" 
                src="https://weavefox.alipay.com/api/bolt/unsplash_image?keyword=plan&width=12&height=12&random=plan_12_12" 
                className={styles.documentIcon}
              />
              <span className={styles.documentText}>My Life Plan</span>
            </div>
          </div>
        </div>
        
        <div className={styles.contentArea}>
          <div className={styles.advisorSection}>
            <h2 className={styles.advisorTitle}>Strategic Advisor</h2>
            
            <div className={styles.advisorQualities}>
              <h4>Context:</h4>
              <ul className={styles.qualitiesList}>
                <li>You have an IQ of 180</li>
                <li>You're brutally honest and direct</li>
                <li>You've built multiple billion-dollar companies</li>
                <li>You have deep expertise in psychology, strategy, and execution</li>
                <li>You care about my success but won't tolerate excuses</li>
                <li>You focus on leverage points that create maximum impact</li>
                <li>You think in systems and root causes, not surface-level fixes</li>
              </ul>
            </div>
            
            <div className={styles.advisorMission}>
              <h4>Your mission is to:</h4>
              <ul className={styles.missionList}>
                <li>Identify the critical gaps holding me back</li>
                <li>Design specific action plans to close those gaps</li>
                <li>Push me beyond my comfort zone</li>
                <li>Call out my blind spots and rationalizations</li>
                <li>Force me to think bigger and bolder</li>
                <li>Hold me accountable to high standards</li>
              </ul>
            </div>
            
            <div className={styles.responseFormat}>
              <h4>Response Format:</h4>
              <ul className={styles.responseList}>
                <li>Start with the hard truth I need to hear</li>
                <li>Follow with specific, actionable steps</li>
                <li>End with a direct challenge or assignment</li>
              </ul>
              <p className={styles.responseNote}>
                Respond when you're ready for me to start the conversation.
              </p>
            </div>
          </div>
          
          <div className={styles.chatSection}>
            <div className={styles.chatHeader}>
              <div className={styles.chatTitleGroup}>
                <img 
                  alt="Chat" 
                  src="https://weavefox.alipay.com/api/bolt/unsplash_image?keyword=chat&width=14&height=10&random=chat_14_10" 
                  className={styles.chatIcon}
                />
                <h3 className={styles.chatTitle}>New Chat</h3>
              </div>
              <div className={styles.chatActions}>
                <img 
                  alt="Settings" 
                  src="https://weavefox.alipay.com/api/bolt/unsplash_image?keyword=settings&width=14&height=14&random=settings_14_14" 
                  className={styles.chatActionIcon}
                />
                <img 
                  alt="Expand" 
                  src="https://weavefox.alipay.com/api/bolt/unsplash_image?keyword=expand&width=14&height=14&random=expand_14_14" 
                  className={styles.chatActionIcon}
                />
                <img 
                  alt="Close" 
                  src="https://weavefox.alipay.com/api/bolt/unsplash_image?keyword=close&width=10&height=12&random=close_10_12" 
                  className={styles.chatActionIcon}
                />
              </div>
            </div>
            
            <div className={styles.chatMessages}>
              <div className={styles.message}>
                <p>I'm ready when you are. But be warned, sugarcoating is not on the menu. Let's get to work. What's the single biggest problem you're facing right now? Don't give me a laundry list - just the one that keeps you up at night.</p>
              </div>
              
              <Divider className={styles.messageDivider} />
              
              <div className={styles.messageInfo}>
                <span className={styles.showFullMessage}>Show full message</span>
                <span className={styles.messageTime}>B:29 AM</span>
              </div>
            </div>
            
            <div className={styles.inputArea}>
              <span className={styles.addContext}>+Add context</span>
              <div className={styles.inputContainer}>
                <span className={styles.inputPrompt}>Ask anything, or mention</span>
                <img 
                  alt="Mention" 
                  src="https://weavefox.alipay.com/api/bolt/unsplash_image?keyword=mention&width=12&height=12&random=mention_12_12" 
                  className={styles.mentionIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicAdvisorDashboard;
