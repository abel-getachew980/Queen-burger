import { useState } from 'react'
import { X, Check, Phone, Sparkles, Utensils, Flame } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function BurgerModal({ item, onClose }) {
  const { t } = useLanguage()
  const [side, setSide] = useState('regular')
  const [extraCheese, setExtraCheese] = useState(false)
  const [extraSauce, setExtraSauce] = useState(false)
  const [spicyLava, setSpicyLava] = useState(false)
  const [quantity, setQuantity] = useState(1)

  if (!item) return null

  // Parse numerical price from string like "2,000 ETB" or "820 ETB"
  const basePriceNum = parseInt(item.price.replace(/[^0-9]/g, ''), 10) || 800

  let addOns = 0
  if (extraCheese) addOns += 150
  if (extraSauce) addOns += 80
  if (spicyLava) addOns += 100

  const totalPrice = (basePriceNum + addOns) * quantity
  const formattedTotal = `${totalPrice.toLocaleString()} ETB`

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-img-container">
            <img src={item.image} alt={item.name} />
            {item.isSpecialty && (
              <span className="modal-specialty-badge">
                <Sparkles size={14} /> {t('menu.specialtyRibbon')}
              </span>
            )}
          </div>
          <div className="modal-title-area">
            <h3>{item.name}</h3>
            <p className="modal-desc">{item.description}</p>
            <span className="modal-base-price">{item.price}</span>
          </div>
        </div>

        <div className="modal-body">
          {/* Choice of Side */}
          <div className="modal-section">
            <label className="modal-section-title">
              <Utensils size={16} /> {t('customizer.sidesChoice')}
            </label>
            <div className="modal-radio-group">
              <button
                type="button"
                className={`modal-chip ${side === 'regular' ? 'active' : ''}`}
                onClick={() => setSide('regular')}
              >
                {side === 'regular' && <Check size={14} />} {t('customizer.regularFries')}
              </button>
              <button
                type="button"
                className={`modal-chip ${side === 'waffle' ? 'active' : ''}`}
                onClick={() => setSide('waffle')}
              >
                {side === 'waffle' && <Check size={14} />} {t('customizer.waffleFries')}
              </button>
            </div>
          </div>

          {/* Add-ons */}
          <div className="modal-section">
            <label className="modal-section-title">
              <Flame size={16} /> {t('customizer.extraToppings')}
            </label>
            <div className="modal-checkbox-group">
              <label className={`modal-check-chip ${extraCheese ? 'active' : ''}`}>
                <input
                  type="checkbox"
                  checked={extraCheese}
                  onChange={(e) => setExtraCheese(e.target.checked)}
                />
                <span>{t('customizer.extraCheese')}</span>
              </label>

              <label className={`modal-check-chip ${extraSauce ? 'active' : ''}`}>
                <input
                  type="checkbox"
                  checked={extraSauce}
                  onChange={(e) => setExtraSauce(e.target.checked)}
                />
                <span>{t('customizer.extraSauce')}</span>
              </label>

              <label className={`modal-check-chip ${spicyLava ? 'active' : ''}`}>
                <input
                  type="checkbox"
                  checked={spicyLava}
                  onChange={(e) => setSpicyLava(e.target.checked)}
                />
                <span>{t('customizer.spicyLava')}</span>
              </label>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="modal-quantity-row">
            <span className="modal-section-title">{t('customizer.quantity')}</span>
            <div className="quantity-controls">
              <button
                type="button"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(q => q + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div className="modal-total-display">
            <span className="modal-total-label">{t('customizer.totalPrice')}</span>
            <span className="modal-total-amount">{formattedTotal}</span>
          </div>

          <a
            href="tel:+251955909094"
            className="modal-call-action"
          >
            <Phone size={18} />
            <span>{t('customizer.callToOrder')}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
