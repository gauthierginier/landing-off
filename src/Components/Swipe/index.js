import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import Card from '../../Components/Card';
import ModalMobile from '../../Components/ModalMobile'

export default class Swipe extends Component{  

    state = {
        selectedTitre : null,
        data : [
                {
                    date : 'ASAP',
                    titre : 'Auditeur Financier',
                    remuneration:'Selon profil',
                    type:'CDI',
                    lieu:'Baie\n-Mahault, 971',
                    mission:"Vous intervenez sur des missions de commissariat aux comptes ou sur des missions financières à forte valeur ajoutée. \n Vous mettez en œuvre la méthodologie d'audit du client et portez une attention particulière à la communication financière de ces groupes dans plusieurs référentiels. \n Vous êtes amené(e) à intervenir sur un ensemble de problématiques et d'enjeux financiers afin d'apporter à nos clients et à leurs interlocuteurs l'assurance et la fiabilité nécessaires à leur progression.",
                    profil:"● Compétences : \n - Goût pour les chiffres \n - Analyse financière \n - Maîtrise des bases en comptabilité \n ● Expérience \n - 1 à 2 ans d’expérience \n ● Personnalité \n - Très bon relationnel \n - Autonomie \n - Force de proposition",
                },
                {
                    date : 'ASAP',
                    titre : 'Chef de projet ERP Comptabilité',
                    remuneration:'Selon profil',
                    type:'CDI',
                    lieu:'Lamentin, 972',
                    mission:"● Vos missions  \n- Participer aux gap analysis  \n- Définir la conception et rédige les spécifications fonctionnelles détaillées \n- Définir les tests et participe aux recettes \n- Coordonner, synthétiser et assure la qualité des validations prononcées \n- Faire circuler et diffuse l'information côté maîtrise d'œuvre \n- Garantire le respect du cahier des charges \n- Garantire le respect des délais et des coûts \n- Encadrer des consultants fonctionnels externes sur les projets ou le support fonctionnel. \n- Participer aux gap analysis \n- Définir la conception et rédige les spécifications fonctionnelles détaillées \n- Définir les tests et participe aux recettesb\n- Coordonner, synthétiser et assure la qualité des validations prononcées \n- Faire circuler et diffuse l'information côté maîtrise d'œuvre \n- Garantire le respect du cahier des charges \n- Garantire le respect des délais et des coûts \n- Encadrer des consultants fonctionnels externes sur les projets ou le support fonctionnel.",
                    profil:"● Competences : \n- Très bonnes compétences fonctionnelles en Supply Chain \n- Anglais courant \n- Capacité d'analyse et de synthèse \n- Maitrise de Sage X3 ● Formation \n- Ingénieur ou équivalent universitaire ● Experience \n- 3 ans minimum d'expérience sur de gestion d’ERP à fort enjeux internationale \n- Une expérience valorisante en comptabilité ● Personnalité \n- Très bon relationnel \n- Autonomie \n- Force de proposition",    
                },
                {
                    date : 'ASAP',
                    titre : 'Chef de projet ERP Grande Distribution',
                    remuneration:'Selon profil',
                    type:'CDI',
                    lieu:'Lamentin, 972',
                    mission:"● Vos missions \n- Participer aux gap analysis \n- Définir la conception et rédige les spécifications fonctionnelles détaillées \n- Définir les tests et participe aux recettes \n- Coordonner, synthétiser et assure la qualité des validations prononcées \n- Faire circuler et diffuse l'information côté maîtrise d'œuvre  \n- Garantire le respect du cahier des charges \n- Garantire le respect des délais et des coûts \n- Encadrer des consultants fonctionnels externes sur les projets ou le support fonctionnel.",
                    profil:"● Competences : \n- Très bonnes compétences fonctionnelles en Supply Chain \n- Anglais courant \n- Capacité d'analyse et de synthèse \n- Maitrise de l’outil METI est un grand plus ● Formation \n- Ingénieur ou équivalent universitaire ● Experience \n- 3 ans minimum d'expérience sur de gestion d’ERP à fort enjeux internationales \n- Une expérience valorisante en Grande Distribution ● Personnalité \n- Très bon relationnel \n- Autonomie \n- Force de proposition",    
                },
                {
                    date : 'ASAP',
                    titre : 'Chef de projet ERP Location Automobile',
                    remuneration:'Selon profil',
                    type:'CDI',
                    lieu:'​Lamentin, 972',
                    mission:"● Vos missions \n- Participer aux gap analysis \n- Définir la conception et rédige les spécifications fonctionnelles détaillées \n- Définir les tests et participe aux recettes \n- Coordonner, synthétiser et assure la qualité des validations prononcées \n- Faire circuler et diffuse l'information côté maîtrise d'œuvre \n- Garantire le respect du cahier des charges \n- Garantire le respect des délais et des coûts \n- Encadrer des consultants fonctionnels externes sur les projets ou le support fonctionnel.",
                    profil:"● Competences : \n- Très bonnes compétences fonctionnelles en Supply Chain \n- Anglais courant \n- Capacité d'analyse et de synthèse \n- Maitrise des ERP en lien au secteur ● Formation  \n- Ingénieur ou équivalent universitaire ● Experience \n- 3 ans minimum d'expérience sur de gestion d’ERP à fort enjeux internationales \n- Une expérience valorisante en comptabilité ● Personnalité \n- Très bon relationnel \n- Autonomie \n- Force de proposition",    
                },
                {
                    date : 'ASAP',
                    titre : 'Chef de projet ERP SIRH',
                    remuneration:'Selon profil',
                    type:'CDI',
                    lieu:'Lamentin, 972',
                    mission:"● Vos missions \n- Participer aux gap analysis \n- Définir la conception et rédige les spécifications fonctionnelles détaillées \n- Définir les tests et participe aux recettes \n- Coordonner, synthétiser et assure la qualité des validations prononcées \n- Faire circuler et diffuse l'information côté maîtrise d'œuvre \n- Garantire le respect du cahier des charges \n- Garantire le respect des délais et des coûts \n- Encadrer des consultants fonctionnels externes sur les projets ou le support fonctionnel.",
                    profil:"● Competences : \n- Très bonnes compétences fonctionnelles en Supply Chain \n- Anglais courant \n- Capacité d'analyse et de synthèse \n- Maitrise d’outils SIRH  ● Formation \n- Ingénieur ou équivalent universitaire ● Experience \n- 3 ans minimum d'expérience sur de gestion d’ERP à fort enjeux internationales \n- Une expérience valorisante en RH ● Personnalité \n- Très bon relationnel \n- Autonomie \n- Force de proposition",    
                },
                {
                    date : 'ASAP',
                    titre : 'Responsable Informatique',
                    remuneration:'Selon profil',
                    type:'CDI',
                    lieu:'Pointe-à-Pitre , 971',
                    mission:"Au sein de la structure vous allez évoluer en toute autonomie et avoir le lead sur la partie informatique.● Vos missions- Gestion des incidents 1,2,3\n- 1 : gestion du parc informatique et administration des serveurs Windows\n- 2 : gestion des incidents réseau, installation,\n- 3 : gestion incident majeur avec ou sans l'opérateur.\n- Configuration téléphone IP \n- Gestion des serveurs de licences métier",
                    profil:"● Compétences :\n- Maitrise de l’environnement Windows\n- Maitrise des outils de sauvegardes\n- Maitrise de l’Active Directory\n● Formation\n- Ingénieur ou équivalent universitaire\n● Expérience\n- Profil Junior à partir d’une année d’expérience\n- Profil issue de l’alternance est un plus",
                },
                {
                    date : 'ASAP',
                    titre : 'Développeur Web',
                    remuneration:'​34K€',
                    type:'CDI',
                    lieu:'Baie-Mahault ,971',
                    mission:'● Vos missions \n- Mise en place de la maîtrise d’ouvrage \n- Mise en place de l’architecture du sit internet \n- Développement Back\n-Office du site internet \n- Mise à jour corrective et évolutive de l’environnement technique',
                    profil:"● Compétences : \n- Bonne connaissance de l'environnement Linux et Shell Scripting \n- Bonne connaissance de php \n- Bonne connaissance de MySql \n- Connaissance préliminaire de git \n- connaissance serveur Linux ● Expérience \n- 1 à 2 ans d’expérience ● Personnalité \n- Très bon relationnel \n- Autonomie \n- Force de proposition",    
                },
                {
                    date : 'ASAP',
                    titre : 'Comptable',
                    remuneration:'​28K€ à 35K€',
                    type:'CDI',
                    lieu:'Jarry, 971',
                    mission:"● Vos missions \n- Tenir la comptabilité générale et/ou analytique et contrôler la cohérence des documents comptables produits \n- Effectuer les paiements et/ou les encaissements et gérer les oppositions \n- Effectuer le suivi comptable des biens et le raccordement avec l'inventaire \n- Produire les documents comptables et légaux (bilans, comptes de résultat, annexes, rapports de gestion...) pour diffusion \n- Participer à la définition, la rédaction et l'actualisation des procédures et des règles comptables, et de leurs conditions d'application \n- Entretenir les relations avec les partenaires financiers et les organismes de contrôles Participer, en liaison avec le contrôle de gestion, à l'analyse financière, statistique et budgétaire de l’agence",
                    profil:"● Competences : \n- De bonnes compétences en analyse financière, de solide connaissance en comptabilité générale et analytique et sur les principes budgétaires et indicateurs de gestion \n- Savoir analyser les données d'une situation, pouvoir définir et mettre en œuvre une procédure et des indicateurs de contrôle et de suivi, élaborer et suivre un budget, bonne connaissance et respect des dispositions légales et réglementaires. ● Formation BAC +2/3 minimum , License Sciences comptables et financières ou BTS Comptabilité et gestion ● Experience \n- 3 ans d’expérience minimum \n- Une expérience en cabinet comptable \n- Une expérience en groupe ou holding ● Personnalité \n- Le sens du client et du service \n- Faire preuve d'initiative \n- Faire preuve de réactivité \n- Faire preuve de rigueur et d'organisation (respect des délais, fiabilité...)",    
                }
            ]
    }

     getSelectedTitre=(titre)=>{
        this.setState({
            selectedTitre : titre,
        })
    }


      render() {
        return (
            <div>
            <ReactSwipe className="carousel" swipeOptions={{continuous: true}}>
            
                {this.state.data.map((el, i)=>{
                return (
                    <div className="slid"><Card date={el.date} titre={el.titre} modal={"#exampleModalMobile"}  remuneration={el.remuneration} type={el.type} lieu={el.lieu}  mission={el.mission}
profil={el.profil} fonctionTitre={()=>{this.getSelectedTitre(el.titre)}} /></div>
                    )
            })}

            
                </ReactSwipe>
                <ModalMobile titre={this.state.selectedTitre}/>
                </div>
        );
    }
}
