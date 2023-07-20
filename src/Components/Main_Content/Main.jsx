import React from 'react';
import HeroBackground from './HeroBackground/HeroBackground';
import CardSection1 from './Section1/CardSection1';
import FlexibleCardSection2 from './Section2/FlexibleCardSection2';
import SpendMoneySection3 from './Section3/SpendMoneySection3';
import CashbackRewardsSection from './Section4/CashbackRewardsSection';
import ConnectAccountsSection5 from './Section5/ConnectAccountsSection5';
import CompilanceCardSection6 from './Section6/CompilanceCardSection6';
import SuperCustomCardSection7 from './Section7/SuperCustomCardSection7';
import FAQSection from './Section8FAQ/FAQSection';
import CTASection from './Section9CTA/CTASection';

const Main = () => {
    return (
        <React.Fragment>
            <main className='grow'>
                {/* Background Section  */}
                <HeroBackground />
                {/* Section#1 */}
                <CardSection1 />
                {/* Section#2 */}
                <FlexibleCardSection2 />
                {/* Section#3 */}
                <SpendMoneySection3 />
                {/* Secton#4 */}
                <CashbackRewardsSection />
                {/* Section#5 */}
                <ConnectAccountsSection5 />
                {/* Section#6 */}
                <CompilanceCardSection6 />
                {/* Section#6 */}
                <SuperCustomCardSection7 />
                {/* FAQs Section */}
                <FAQSection />

                {/* CTA Section */}
                <CTASection />
            </main>
        </React.Fragment>
    );
};

export default Main;
