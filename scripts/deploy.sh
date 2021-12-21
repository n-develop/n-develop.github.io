echo "Checkout"
git checkout --orphan gh-pages
echo "Build"
npm run build
cp -f CNAME dist
git --work-tree dist add --all
git --work-tree dist commit -m gh-pages
echo "Push"
git push origin HEAD:gh-pages --force
echo "Cleanup"
rm -r dist
git checkout -f main
git branch -D gh-pages
echo "Done"
