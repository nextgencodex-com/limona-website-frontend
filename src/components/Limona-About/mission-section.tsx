import styles from './mission.module.css';
import { Trophy, Infinity, Hammer, Leaf } from 'lucide-react';

export default function MissionSection() {
  return (
    <section className={styles.missionSection}>
      <h2 className={styles.missionTitle}>Our Mission</h2>
      <p className={styles.missionSubtitle}>
        To redefine fashion by creating clothing that celebrates individuality, promotes inclusivity, and delivers exceptional quality in every piece.
      </p>
      <div className={styles.missionGrid}>
        <div className={styles.missionItem}>
          <Trophy className={styles.missionIcon} aria-label="Quality First" />
          <div className={styles.missionHeading}>Quality First</div>
          <div className={styles.missionText}>
            We source only the finest materials to ensure every piece meets our high standards of excellence.
          </div>
        </div>
        <div className={styles.missionItem}>
          <Infinity className={styles.missionIcon} aria-label="Inclusive Fashion" />
          <div className={styles.missionHeading}>Inclusive Fashion</div>
          <div className={styles.missionText}>
            Our unisex designs celebrate diversity and ensure everyone can express their unique style.
          </div>
        </div>
        <div className={styles.missionItem}>
          <Hammer className={styles.missionIcon} aria-label="Craftsmanship" />
          <div className={styles.missionHeading}>Craftsmanship</div>
          <div className={styles.missionText}>
            Each item is carefully crafted with attention to detail and a commitment to durability.
          </div>
        </div>
        <div className={styles.missionItem}>
          <Leaf className={styles.missionIcon} aria-label="Sustainability" />
          <div className={styles.missionHeading}>Sustainability</div>
          <div className={styles.missionText}>
            We prioritize ethical production practices and environmentally conscious materials.
          </div>
        </div>
      </div>
    </section>
  );
}
