# Moving LWC 
Demostrating issue when moving LWC Component calling Apex up the namespaced package hierarchy
## Technique
You can move most metadata to a parent package if you temporarily remove it from the original package in Setup > Installed Packages > View Comonents > Remove.

The metadata artefact then does not belong to any package while still being inside the namespace. You can then install the new version of the parent package which can "consume" the artefact.

## Issue with LWC
This process does not seem to work for LWC linked to a @AuraEnabled Apex method. Such method must be in the same package as the LWC component. Removing both into the "void" seems to break something and you will no longer be able to "consume" the component anywhere again.

## Steps to Reproduce
- Create 2 Unlocked Packages with Namespace
- Add an Apex Class with @AuraEnabled method and a LWC component which wires it (versions 0.1)
- Install both packages
- Move Apex Class and LWC Component into the other package (versions 0.2)
- Remove both from the package in Subscriber org (Setup > Installed Packages > xxx > View Components > remove)
- Upgrade the packages